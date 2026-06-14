
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use App\Models\BGVCase;

// ─────────────────────────────────────────
// LOGIN — returns role so frontend can redirect
// ─────────────────────────────────────────
Route::post('/login', function (Request $request) {

    $request->validate([
        'email'    => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user  = Auth::user();
    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user'  => [
            'id'    => $user->id,
            'name'  => $user->name,
            'email' => $user->email,
            'role'  => $user->role,
        ],
    ]);
});

// ─────────────────────────────────────────
// REGISTER
// ─────────────────────────────────────────
Route::post('/register', function (Request $request) {

    $request->validate([
        'name'     => 'required',
        'email'    => 'required|email|unique:users,email',
        'password' => 'required|min:8',
    ]);

    $user = \App\Models\User::create([
        'name'     => $request->name,
        'email'    => $request->email,
        'password' => Hash::make($request->password),
        'role'     => 'client',
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json(['token' => $token, 'user' => $user], 201);
});

// ─────────────────────────────────────────
// CLIENT COMPANY REGISTER
// ─────────────────────────────────────────
Route::post('/clients/register', function (Request $request) {

    $request->validate([
        'companyName'    => 'required|string|max:255',
        'gstin'          => 'required|string|max:15',
        'primaryContact' => 'required|string|max:255',
        'contactEmail'   => 'required|email|unique:users,email',
        'password'       => 'required|min:8',
    ]);

    $user = \App\Models\User::create([
        'name'     => $request->companyName,
        'email'    => $request->contactEmail,
        'password' => Hash::make($request->password),
        'role'     => 'client',
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'message' => 'Client registered successfully',
        'token'   => $token,
        'user'    => [
            'id'    => $user->id,
            'name'  => $user->name,
            'email' => $user->email,
            'role'  => $user->role,
        ],
    ], 201);
});

// ─────────────────────────────────────────
// FORGOT PASSWORD — Step 1: Send OTP
// ─────────────────────────────────────────
Route::post('/forgot-password', function (Request $request) {

    $request->merge(['email' => trim(strtolower($request->email))]);
    $request->validate(['email' => 'required|email|exists:users,email']);

    $otp = rand(1000, 9999);

    DB::table('password_resets')->updateOrInsert(
        ['email' => $request->email],
        ['token' => $otp, 'verified' => false, 'created_at' => now()]
    );

    Mail::raw("Your OTP code is: $otp \nThis code expires in 10 minutes.", function ($message) use ($request) {
        $message->to($request->email)->subject('Password Reset OTP');
    });

    return response()->json(['message' => 'OTP sent successfully']);
});

// ─────────────────────────────────────────
// VERIFY OTP — Step 2
// ─────────────────────────────────────────
Route::post('/verify-otp', function (Request $request) {

    $request->merge(['email' => trim(strtolower($request->email))]);
    $request->validate(['email' => 'required|email', 'otp' => 'required|digits:4']);

    $record = DB::table('password_resets')->where('email', $request->email)->first();

    if (!$record) {
        return response()->json(['message' => 'OTP not found. Please request a new one.'], 400);
    }

    if (now()->diffInMinutes($record->created_at) > 10) {
        DB::table('password_resets')->where('email', $request->email)->delete();
        return response()->json(['message' => 'OTP has expired. Please request a new one.'], 400);
    }

    if ($record->token != $request->otp) {
        return response()->json(['message' => 'Invalid OTP. Please try again.'], 400);
    }

    DB::table('password_resets')->where('email', $request->email)->update(['verified' => true]);

    return response()->json(['message' => 'OTP verified successfully']);
});

// ─────────────────────────────────────────
// RESET PASSWORD — Step 3
// ─────────────────────────────────────────
Route::post('/reset-password', function (Request $request) {

    $request->merge(['email' => trim(strtolower($request->email))]);
    $request->validate([
        'email'                 => 'required|email',
        'password'              => 'required|min:6|confirmed',
        'password_confirmation' => 'required',
    ]);

    $record = DB::table('password_resets')
        ->where('email', $request->email)
        ->where('verified', true)
        ->first();

    if (!$record) {
        return response()->json(['message' => 'Please verify your OTP before resetting password.'], 403);
    }

    $user = \App\Models\User::where('email', $request->email)->first();
    if (!$user) {
        return response()->json(['message' => 'User not found.'], 404);
    }

    $user->update(['password' => Hash::make($request->password)]);
    DB::table('password_resets')->where('email', $request->email)->delete();

    return response()->json(['message' => 'Password reset successful. You can now log in.']);
});

// ─────────────────────────────────────────
// DEV HELPERS (remove in production)
// ─────────────────────────────────────────
Route::get('/create-admin', function () {
    $user = \App\Models\User::updateOrCreate(
        ['email' => 'admin@satyapan.com'],
        ['name' => 'Admin', 'password' => Hash::make('Admin@123'), 'role' => 'admin']
    );
    return response()->json(['message' => 'Admin created', 'user' => $user]);
});

Route::get('/test-password', function () {
    $user = \App\Models\User::where('email', 'admin@satyapan.com')->first();
    if (!$user) return response()->json(['message' => 'Admin user not found']);
    return response()->json([
        'exists'         => true,
        'email'          => $user->email,
        'password_match' => Hash::check('Admin@123', $user->password),
    ]);
});

// ═════════════════════════════════════════
// PROTECTED ROUTES (Bearer token required)
// ═════════════════════════════════════════
Route::middleware('auth:sanctum')->group(function () {

    // ── GET LOGGED-IN USER ───────────────────────────────────
    Route::get('/me', function (Request $request) {
        $user = $request->user();
        return response()->json([
            'user' => [
                'id'    => $user->id,
                'name'  => $user->name,
                'email' => $user->email,
                'role'  => $user->role,
            ],
        ]);
    });

    // ── LOGOUT ───────────────────────────────────────────────
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    });

    // ── CREATE USER (admin only) ─────────────────────────────
    Route::post('/users/create', function (Request $request) {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized. Admin access required.'], 403);
        }

        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role'     => 'required|in:admin,allocator,verifier,check_manager,report_writing,pvt_qc,client,onboarding',
        ]);

        $user = \App\Models\User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => $request->role,
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user'    => ['id' => $user->id, 'name' => $user->name, 'email' => $user->email, 'role' => $user->role],
        ], 201);
    });

    // ── GET ALL USERS (admin only) ───────────────────────────
    Route::get('/users', function (Request $request) {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized. Admin access required.'], 403);
        }

        $users = \App\Models\User::select('id', 'name', 'email', 'role', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json(['users' => $users]);
    });

    // ── DELETE USER (admin only) ─────────────────────────────
    Route::delete('/users/{id}', function (Request $request, $id) {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized. Admin access required.'], 403);
        }

        $user = \App\Models\User::find($id);
        if (!$user) return response()->json(['message' => 'User not found'], 404);

        if ($user->id === $request->user()->id) {
            return response()->json(['message' => 'You cannot delete your own account'], 400);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    });

    // ═════════════════════════════════════════════════════════
    // CASES ROUTES
    // ═════════════════════════════════════════════════════════

    // ── CREATE CASE ──────────────────────────────────────────
    Route::post('/cases', function (Request $request) {
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
            'payment_link'     => $request->payment_link,
            'status'           => 'pending',
            'notes'            => $request->notes,
            'created_by'       => $request->user()->id,
        ]);


        \App\Models\CaseEvent::log(
            $case->case_id,
            'created',
            'Case created',
            "Case opened for {$case->candidate_name}",
            ['checks' => $case->checks, 'billing_mode' => $case->billing_mode],
            $request->user()
        );

        return response()->json(['case' => $case], 201);
    });

    // ── LIST CASES (role-filtered) ───────────────────────────
    Route::get('/cases', function (Request $request) {
        $user  = $request->user();
        $query = BGVCase::orderByDesc('created_at');

        // Client role: only sees cases they created or where their name matches
        if ($user->role === 'client') {
            $query->where(function ($q) use ($user) {
                $q->where('created_by', $user->id)
                  ->orWhere('candidate_email', $user->email)
                  ->orWhere('client_name', 'like', "%{$user->name}%");
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

        $cases = $query->get()->map(function ($c) {
            $checkLabels = collect($c->checks)->map(function ($ch) {
                $map = [
                    'employment' => 'EMP', 'education' => 'EDU', 'address' => 'ADDR',
                    'database'   => 'DB',  'criminal'  => 'CRI', 'drug'    => 'DRUG',
                    'court'      => 'CRT',
                ];
                return $map[$ch] ?? strtoupper(substr($ch, 0, 3));
            })->implode('·');

            return [
                'id'           => $c->id,
                'case_id'      => $c->case_id,
                'candidate'    => $c->candidate_name,
                'client'       => $c->client_name,
                'checks'       => $checkLabels,
                'status'       => $c->status,
                'priority'     => $c->priority,
                'billing_mode' => $c->billing_mode,
                'total_amount' => $c->total_amount,
                'created_at'   => $c->created_at->format('d M Y'),
                'tat'          => $c->created_at->diffInDays(now()) . 'd',
            ];
        });

        return response()->json(['cases' => $cases]);
    });

    // ── DASHBOARD STATS ──────────────────────────────────────
    Route::get('/dashboard-stats', function (Request $request) {
        $user  = $request->user();
        $query = BGVCase::query();

        // Client: stats only for their own cases
        if ($user->role === 'client') {
            $query->where(function ($q) use ($user) {
                $q->where('created_by', $user->id)
                  ->orWhere('candidate_email', $user->email)
                  ->orWhere('client_name', 'like', "%{$user->name}%");
            });
        }

        $total      = (clone $query)->count();
        $inProgress = (clone $query)->where('status', 'in-progress')->count();
        $completed  = (clone $query)->where('status', 'completed')->count();
        $pending    = (clone $query)->where('status', 'pending')->count();
        $qcReview   = (clone $query)->where('status', 'qc-review')->count();
        $clients    = BGVCase::distinct('client_name')->count('client_name');
        $clearRate  = $total > 0 ? round(($completed / $total) * 100) : 0;

        // Avg TAT for completed cases
        // SQLite version (local dev):
        $avgTat = BGVCase::where('status', 'completed')
            ->selectRaw('AVG(JULIANDAY(updated_at) - JULIANDAY(created_at)) as avg_days')
            ->value('avg_days');
        // PostgreSQL version (Render — uncomment and comment out the SQLite version above):
        // $avgTat = BGVCase::where('status', 'completed')
        //     ->selectRaw("AVG(EXTRACT(EPOCH FROM (updated_at - created_at))/86400) as avg_days")
        //     ->value('avg_days');

        return response()->json([
            'total'       => $total,
            'in_progress' => $inProgress,
            'completed'   => $completed,
            'pending'     => $pending,
            'qc_review'   => $qcReview,
            'clients'     => $clients,
            'clear_rate'  => $clearRate . '%',
            'avg_tat'     => round($avgTat ?? 0, 1) . ' days',
        ]);
    });

    // ── UPDATE CASE STATUS ───────────────────────────────────
    // Route::patch('/cases/{caseId}/status', function (Request $request, $caseId) {
    //     $request->validate([
    //         'status' => 'required|in:pending,in-progress,qc-review,completed,on-hold',
    //     ]);

    //     $case = BGVCase::where('case_id', $caseId)->first();
    //     if (!$case) return response()->json(['message' => 'Case not found'], 404);

    //     $case->update(['status' => $request->status]);
    //     return response()->json(['message' => 'Status updated', 'case' => $case]);
    // });
    Route::patch('/cases/{caseId}/status', function (Request $request, $caseId) {
        $request->validate([
            'status' => 'required|in:pending,in-progress,qc-review,completed,on-hold',
        ]);

        $case = BGVCase::where('case_id', $caseId)->first();
        if (!$case) return response()->json(['message' => 'Case not found'], 404);

        $oldStatus = $case->status;
        $case->update(['status' => $request->status]);

        \App\Models\CaseEvent::log(
            $case->case_id,
            'status_change',
            'Status updated',
            'Status changed from ' . str_replace('-', ' ', $oldStatus) . ' to ' . str_replace('-', ' ', $request->status),
            ['from' => $oldStatus, 'to' => $request->status],
            $request->user()
        );

        return response()->json(['message' => 'Status updated', 'case' => $case]);
    });

    // ── SAVE CHECK RESULT (verifier) ─────────────────────────
    Route::post('/cases/{caseId}/check-result', function (Request $request, $caseId) {
        $request->validate([
            'check_type' => 'required|in:employment,education,address,database,criminal,drug,court',
            'outcome'    => 'required|in:clear,discrepancy,unable',
            'is_draft'   => 'boolean',
        ]);

        $case = BGVCase::where('case_id', $caseId)->first();
        if (!$case) return response()->json(['message' => 'Case not found'], 404);

        // Store result in a JSON column (check_results) — add this column to migration if needed
        $results = $case->check_results ?? [];
        $results[$request->check_type] = [
            'outcome'   => $request->outcome,
            'form_data' => $request->form_data ?? [],
            'is_draft'  => $request->is_draft ?? false,
            'saved_by'  => $request->user()->id,
            'saved_at'  => now()->toDateTimeString(),
        ];

        // Auto-update case status
    //     if (!($request->is_draft ?? false)) {
    //         $allChecks   = $case->checks;
    //         $doneChecks  = array_keys(array_filter($results, fn($r) => !($r['is_draft'] ?? false)));
    //         $allDone     = count(array_intersect($allChecks, $doneChecks)) === count($allChecks);
    //         $newStatus   = $allDone ? 'qc-review' : 'in-progress';
    //         $case->update(['status' => $newStatus, 'check_results' => $results]);
    //     } else {
    //         $case->update(['status' => 'in-progress', 'check_results' => $results]);
    //     }

    //     return response()->json(['message' => 'Check result saved', 'check_results' => $results]);
    // });
    // Auto-update case status
        if (!($request->is_draft ?? false)) {
            $allChecks   = $case->checks;
            $doneChecks  = array_keys(array_filter($results, fn($r) => !($r['is_draft'] ?? false)));
            $allDone     = count(array_intersect($allChecks, $doneChecks)) === count($allChecks);
            $newStatus   = $allDone ? 'qc-review' : 'in-progress';
            $case->update(['status' => $newStatus, 'check_results' => $results]);
        } else {
            $case->update(['status' => 'in-progress', 'check_results' => $results]);
        }

        \App\Models\CaseEvent::log(
            $case->case_id,
            'check_result',
            ucfirst(str_replace('_', ' ', $request->check_type)) . ' check ' . (($request->is_draft ?? false) ? 'drafted' : 'completed'),
            'Outcome: ' . $request->outcome,
            ['check_type' => $request->check_type, 'outcome' => $request->outcome, 'is_draft' => $request->is_draft ?? false],
            $request->user()
        );

        return response()->json(['message' => 'Check result saved', 'check_results' => $results]);
    });

    // ── CASE TIMELINE ─────────────────────────────────────────
    Route::get('/cases/{caseId}/timeline', function (Request $request, $caseId) {
        $case = BGVCase::where('case_id', $caseId)->first();
        if (!$case) return response()->json(['message' => 'Case not found'], 404);

        $user = $request->user();
        if ($user->role === 'client') {
            $owns = $case->created_by === $user->id
                || $case->candidate_email === $user->email
                || stripos($case->client_name, $user->name) !== false;
            if (!$owns) {
                return response()->json(['message' => 'Unauthorized'], 403);
            }
        }

        $events = \App\Models\CaseEvent::where('case_id', $caseId)
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(fn ($e) => [
                'id'          => $e->id,
                'type'        => $e->type,
                'title'       => $e->title,
                'description' => $e->description,
                'meta'        => $e->meta,
                'actor'       => $e->actor_name,
                'timestamp'   => $e->created_at->toIso8601String(),
            ]);

        return response()->json(['timeline' => $events]);
    });

});
// ─────────────────────────────────────────
// CLIENT COMPANY REGISTER
// ─────────────────────────────────────────
Route::post('/clients/register', function (Request $request) {

    $request->validate([
        'companyName'    => 'required|string|max:255',
        'gstin'          => 'required|string|max:15',
        'primaryContact' => 'required|string|max:255',
        'contactPhone'   => 'nullable|string|max:20',
        'contactEmail'   => 'required|email|unique:users,email',
        'password'       => 'required|min:8',
        'billingMode'    => 'required|in:prepaid_client,prepaid_candidate,postpaid_client',
        'agreedChecks'   => 'required|array|min:1',
        'agreedChecks.*' => 'in:employment,education,address,database,criminal,drug_test,courtroom',
        'checkRates'     => 'nullable|array',
        'checkRates.*'   => 'numeric|min:0',
    ]);

    $user = \App\Models\User::create([
        'name'            => $request->companyName,
        'email'           => $request->contactEmail,
        'password'        => Hash::make($request->password),
        'role'            => 'client',
        'gstin'           => $request->gstin,
        'primary_contact' => $request->primaryContact,
        'contact_phone'   => $request->contactPhone,
        'billing_mode'    => $request->billingMode,
        'agreed_checks'   => $request->agreedChecks,
        'check_rates'     => $request->checkRates ?? [],
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'message' => 'Client registered successfully',
        'token'   => $token,
        'user'    => [
            'id'             => $user->id,
            'name'           => $user->name,
            'email'          => $user->email,
            'role'           => $user->role,
            'gstin'          => $user->gstin,
            'primaryContact' => $user->primary_contact,
            'contactPhone'   => $user->contact_phone,
            'billingMode'    => $user->billing_mode,
            'agreedChecks'   => $user->agreed_checks,
            'checkRates'     => $user->check_rates,
        ],
    ], 201);
});
// ═════════════════════════════════════════════════════════
    // CANDIDATE LINKS (Candidate Portal — Link Generator)
    // ═════════════════════════════════════════════════════════

    // ── LIST LINKS (client sees only their own; admin sees all) ──
    Route::get('/candidate-links', function (Request $request) {
        $user  = $request->user();
        $query = \App\Models\CandidateLink::orderByDesc('created_at');

        if ($user->role !== 'admin') {
            $query->where('client_id', $user->id);
        }

        $links = $query->get()->map(function ($l) {
            return [
                'id'            => $l->id,
                'candidateName' => $l->candidate_name,
                'email'         => $l->email,
                'mobile'        => $l->mobile,
                'position'      => $l->position,
                'checks'        => $l->checks,
                'expiry'        => $l->expiry,
                'status'        => $l->status,
                'link'          => url("/candidate/{$l->token}"),
                'createdAt'     => $l->created_at->format('Y-m-d'),
            ];
        });

        return response()->json(['links' => $links]);
    });

    // ── CREATE SINGLE LINK ────────────────────────────────────
    Route::post('/candidate-links', function (Request $request) {
        $request->validate([
            'candidateName' => 'required|string|max:255',
            'email'         => 'required|email',
            'mobile'        => 'nullable|string|max:20',
            'position'      => 'nullable|string|max:255',
            'checks'        => 'required|array|min:1',
            'checks.*'      => 'in:emp,edu,addr,db,criminal,drug,court',
            'expiry'        => 'required|in:24h,48h,72h,7 days',
        ]);

        $token = \App\Models\CandidateLink::generateToken();

        $link = \App\Models\CandidateLink::create([
            'token'          => $token,
            'candidate_name' => $request->candidateName,
            'email'          => $request->email,
            'mobile'         => $request->mobile,
            'position'       => $request->position,
            'checks'         => $request->checks,
            'expiry'         => $request->expiry,
            'status'         => 'pending',
            'client_id'      => $request->user()->id,
            'expires_at'     => \App\Models\CandidateLink::expiryToCarbon($request->expiry),
        ]);

        return response()->json([
            'message' => 'Candidate link generated',
            'link'    => [
                'id'            => $link->id,
                'candidateName' => $link->candidate_name,
                'email'         => $link->email,
                'mobile'        => $link->mobile,
                'position'      => $link->position,
                'checks'        => $link->checks,
                'expiry'        => $link->expiry,
                'status'        => $link->status,
                'link'          => url("/candidate/{$token}"),
                'createdAt'     => $link->created_at->format('Y-m-d'),
            ],
        ], 201);
    });

    // ── CREATE BULK LINKS (CSV upload) ────────────────────────
    Route::post('/candidate-links/bulk', function (Request $request) {
        $request->validate([
            'rows'              => 'required|array|min:1',
            'rows.*.candidateName' => 'required|string|max:255',
            'rows.*.email'         => 'required|email',
            'rows.*.mobile'        => 'nullable|string|max:20',
            'rows.*.position'      => 'nullable|string|max:255',
            'rows.*.checks'        => 'required|array|min:1',
            'rows.*.checks.*'      => 'in:emp,edu,addr,db,criminal,drug,court',
        ]);

        $clientId = $request->user()->id;
        $created  = [];

        foreach ($request->rows as $row) {
            $token = \App\Models\CandidateLink::generateToken();

            $link = \App\Models\CandidateLink::create([
                'token'          => $token,
                'candidate_name' => $row['candidateName'],
                'email'          => $row['email'],
                'mobile'         => $row['mobile'] ?? null,
                'position'       => $row['position'] ?? null,
                'checks'         => $row['checks'],
                'expiry'         => '72h',
                'status'         => 'pending',
                'client_id'      => $clientId,
                'expires_at'     => \App\Models\CandidateLink::expiryToCarbon('72h'),
            ]);

            $created[] = [
                'id'            => $link->id,
                'candidateName' => $link->candidate_name,
                'email'         => $link->email,
                'mobile'        => $link->mobile,
                'position'      => $link->position,
                'checks'        => $link->checks,
                'expiry'        => $link->expiry,
                'status'        => $link->status,
                'link'          => url("/candidate/{$token}"),
                'createdAt'     => $link->created_at->format('Y-m-d'),
            ];
        }

        return response()->json([
            'message' => count($created) . ' candidate link(s) generated',
            'links'   => $created,
        ], 201);
    });

    // ── SEND LINK (SMS/Email — stub) ──────────────────────────
    Route::post('/candidate-links/{id}/send', function (Request $request, $id) {
        $request->validate(['method' => 'required|in:SMS,Email']);

        $link = \App\Models\CandidateLink::find($id);
        if (!$link) return response()->json(['message' => 'Link not found'], 404);

        if ($request->user()->role !== 'admin' && $link->client_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // TODO: actually send via SendGrid (email) or SMS gateway
        if ($request->method === 'Email') {
            Mail::raw(
                "Hi {$link->candidate_name},\n\nPlease complete your verification here: " . url("/candidate/{$link->token}"),
                function ($message) use ($link) {
                    $message->to($link->email)->subject('Complete Your Background Verification');
                }
            );
        }

        return response()->json(['message' => "{$request->method} sent to " . ($request->method === 'SMS' ? $link->mobile : $link->email)]);
    });

    // ── REVOKE / DELETE LINK ───────────────────────────────────
    Route::delete('/candidate-links/{id}', function (Request $request, $id) {
        $link = \App\Models\CandidateLink::find($id);
        if (!$link) return response()->json(['message' => 'Link not found'], 404);

        if ($request->user()->role !== 'admin' && $link->client_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $link->delete();
        return response()->json(['message' => 'Link revoked']);
    });