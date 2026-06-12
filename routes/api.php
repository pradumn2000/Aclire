
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
    Route::patch('/cases/{caseId}/status', function (Request $request, $caseId) {
        $request->validate([
            'status' => 'required|in:pending,in-progress,qc-review,completed,on-hold',
        ]);

        $case = BGVCase::where('case_id', $caseId)->first();
        if (!$case) return response()->json(['message' => 'Case not found'], 404);

        $case->update(['status' => $request->status]);
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
        if (!($request->is_draft ?? false)) {
            $allChecks   = $case->checks;
            $doneChecks  = array_keys(array_filter($results, fn($r) => !($r['is_draft'] ?? false)));
            $allDone     = count(array_intersect($allChecks, $doneChecks)) === count($allChecks);
            $newStatus   = $allDone ? 'qc-review' : 'in-progress';
            $case->update(['status' => $newStatus, 'check_results' => $results]);
        } else {
            $case->update(['status' => 'in-progress', 'check_results' => $results]);
        }

        return response()->json(['message' => 'Check result saved', 'check_results' => $results]);
    });

});
