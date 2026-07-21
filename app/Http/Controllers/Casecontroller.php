<?php

namespace App\Http\Controllers;

use App\Models\BGVCase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CaseController extends Controller
{
    // ── POST /api/cases  (create) ────────────────────────────
    public function store(Request $request)
    {
        $request->validate([
            'candidate_name'  => 'required|string|max:255',
            'candidate_email' => 'required|email',
            'client_name'     => 'required|string|max:255',
            'billing_mode'    => 'required|in:prepaid_client,prepaid_candidate,postpaid_client',
            'checks'          => 'required|array|min:1',
            'checks.*'        => 'in:employment,education,address,database,criminal,drug,court',
        ]);

        $case = BGVCase::create([
            'case_id'          => BGVCase::generateCaseId(),
            'candidate_name'   => $request->candidate_name,
            'candidate_email'  => $request->candidate_email,
            'candidate_mobile' => $request->candidate_mobile,
            'candidate_dob'    => $request->candidate_dob,
            'position'         => $request->position,
            'client_name'      => $request->client_name,
            'client_id'        => $request->client_id,
            'checks'           => $request->checks,
            'priority'         => $request->priority ?? 'normal',
            'billing_mode'     => $request->billing_mode,
            'payment_timing'   => $request->payment_timing,
            'invoice_cycle'    => $request->invoice_cycle,
            'po_number'        => $request->po_number,
            'total_amount'     => $request->total_amount ?? 0,
            'tat'              => $request->overall_tat ?? null,   // ← was missing entirely
            'check_tat'        => $request->check_tat ?? null,     // ← was missing entirely
            'payment_link'     => $request->payment_link,
            'status'           => 'pending',
            'notes'            => $request->notes,
            'created_by'       => Auth::id(),
        ]);

        return response()->json(['case' => $case], 201);
    }

    // ── GET /api/cases/{case}  (single case — used by AddCase.jsx edit mode) ──
    // NOTE: this was entirely missing before. {case} here is the human-facing
    // case_id string (e.g. "BGV-2501"), matching what the frontend sends via
    // editCaseId — not the numeric primary key.
    public function show($case)
    {
        $bgvCase = BGVCase::where('case_id', $case)->firstOrFail();

        return response()->json(['case' => $bgvCase]);
    }

    // ── PUT /api/cases/{case}  (update — used by AddCase.jsx edit mode) ────
    // NOTE: this was entirely missing before. Any value admin changed while
    // editing an existing case (TAT, amount, anything) had nowhere to be
    // saved, so it silently never persisted.
    public function update(Request $request, $case)
    {
        $bgvCase = BGVCase::where('case_id', $case)->firstOrFail();

        $bgvCase->update([
            'candidate_name'   => $request->candidate_name   ?? $bgvCase->candidate_name,
            'candidate_email'  => $request->candidate_email  ?? $bgvCase->candidate_email,
            'candidate_mobile' => $request->candidate_mobile ?? $bgvCase->candidate_mobile,
            'candidate_dob'    => $request->candidate_dob    ?? $bgvCase->candidate_dob,
            'position'         => $request->position         ?? $bgvCase->position,
            'client_name'      => $request->client_name      ?? $bgvCase->client_name,
            'client_id'        => $request->client_id        ?? $bgvCase->client_id,
            'checks'           => $request->checks           ?? $bgvCase->checks,
            'priority'         => $request->priority         ?? $bgvCase->priority,
            'billing_mode'     => $request->billing_mode     ?? $bgvCase->billing_mode,
            'payment_timing'   => $request->payment_timing   ?? $bgvCase->payment_timing,
            'invoice_cycle'    => $request->invoice_cycle    ?? $bgvCase->invoice_cycle,
            'po_number'        => $request->po_number        ?? $bgvCase->po_number,
            'total_amount'     => $request->total_amount     ?? $bgvCase->total_amount,
            'tat'              => $request->overall_tat      ?? $bgvCase->tat,
            'check_tat'        => $request->check_tat        ?? $bgvCase->check_tat,
            'payment_link'     => $request->payment_link      ?? $bgvCase->payment_link,
            'notes'            => $request->notes             ?? $bgvCase->notes,
        ]);

        return response()->json(['case' => $bgvCase->fresh()]);
    }

    // ── GET /api/cases  (list — filtered by role) ────────────
    public function index(Request $request)
    {
        $user  = Auth::user();
        $query = BGVCase::with('creator:id,name')->orderByDesc('created_at');

        // Role-based filtering
        // client role only sees their own cases (by client_id or email match)
        if ($user->role === 'client') {
            $query->where(function ($q) use ($user) {
                $q->where('candidate_email', $user->email)
                  ->orWhere('client_id', $user->id);
            });
        }

        // Search
        if ($request->search) {
            $s = $request->search;
            $query->where(function ($q) use ($s) {
                $q->where('case_id', 'like', "%$s%")
                  ->orWhere('candidate_name', 'like', "%$s%")
                  ->orWhere('client_name', 'like', "%$s%");
            });
        }

        // Status filter
        if ($request->status && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $cases = $query->get()->map(fn($c) => [
            'id'              => $c->id,
            'case_id'         => $c->case_id,
            'candidate'       => $c->candidate_name,
            'client'          => $c->client_name,
            'checks'          => $c->checks, // raw array, e.g. ["employment","education","address"]
            'status'          => $c->status,
            'priority'        => $c->priority,
            'total_amount'    => $c->total_amount,
            'created_at'      => $c->created_at->format('d M Y'),
            'tat'             => $c->tat,        // ← now the real stored TAT, not diffInDays
            'check_tat'       => $c->check_tat,  // ← per-check TAT breakdown, for CheckwiseGrid
        ]);

        return response()->json(['cases' => $cases]);
    }

    // ── GET /api/dashboard-stats ─────────────────────────────
    public function stats()
    {
        $total      = BGVCase::count();
        $inProgress = BGVCase::where('status', 'in-progress')->count();
        $completed  = BGVCase::where('status', 'completed')->count();
        $pending    = BGVCase::where('status', 'pending')->count();

        // Unique clients
        $clients = BGVCase::distinct('client_name')->count('client_name');

        // Clear rate: completed cases where no discrepancy
        // (simple: completed / total * 100)
        $clearRate = $total > 0 ? round(($completed / $total) * 100) : 0;

        // Avg TAT (days) for completed cases
        $avgTat = BGVCase::where('status', 'completed')
            ->selectRaw('AVG(JULIANDAY(updated_at) - JULIANDAY(created_at)) as avg_days')
            ->value('avg_days');
        // PostgreSQL version: use EXTRACT(EPOCH FROM (updated_at - created_at))/86400
        // Swap the line above with this on Render:
        // $avgTat = BGVCase::where('status', 'completed')
        //     ->selectRaw("AVG(EXTRACT(EPOCH FROM (updated_at - created_at))/86400) as avg_days")
        //     ->value('avg_days');

        return response()->json([
            'total'       => $total,
            'in_progress' => $inProgress,
            'completed'   => $completed,
            'pending'     => $pending,
            'clients'     => $clients,
            'clear_rate'  => $clearRate . '%',
            'avg_tat'     => round($avgTat ?? 0, 1) . ' days',
        ]);
    }
}