<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

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
// CREATE USER — admin only (requires Bearer token + admin role)
// ─────────────────────────────────────────
Route::middleware('auth:sanctum')->post('/users/create', function (Request $request) {

    // Only admin can create users
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
        'user'    => [
            'id'    => $user->id,
            'name'  => $user->name,
            'email' => $user->email,
            'role'  => $user->role,
        ],
    ], 201);
});
// ─────────────────────────────────────────
// REGISTER
// ─────────────────────────────────────────
Route::post('/register', function (Request $request) {

    $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:8',
        'role' => 'required'
    ]);

    $user = \App\Models\User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'role' => $request->role,
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user
    ], 201);
});

// ─────────────────────────────────────────
// GET ALL USERS — admin only
// ─────────────────────────────────────────
Route::middleware('auth:sanctum')->get('/users', function (Request $request) {

    if ($request->user()->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized. Admin access required.'], 403);
    }

    $users = \App\Models\User::select('id', 'name', 'email', 'role', 'created_at')
        ->orderBy('created_at', 'desc')
        ->get();

    return response()->json(['users' => $users]);
});

// ─────────────────────────────────────────
// DELETE USER — admin only
// ─────────────────────────────────────────
Route::middleware('auth:sanctum')->delete('/users/{id}', function (Request $request, $id) {

    if ($request->user()->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized. Admin access required.'], 403);
    }

    $user = \App\Models\User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Prevent admin from deleting themselves
    if ($user->id === $request->user()->id) {
        return response()->json(['message' => 'You cannot delete your own account'], 400);
    }

    $user->delete();

    return response()->json(['message' => 'User deleted successfully']);
});

// ─────────────────────────────────────────
// GET LOGGED IN USER — any authenticated user
// ─────────────────────────────────────────
Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
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

// ─────────────────────────────────────────
// LOGOUT
// ─────────────────────────────────────────
Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Logged out successfully']);
});

// ─────────────────────────────────────────
// STEP 1 — Send OTP
// ─────────────────────────────────────────
Route::post('/forgot-password', function (Request $request) {

    $request->merge(['email' => trim(strtolower($request->email))]);

    $request->validate([
        'email' => 'required|email|exists:users,email',
    ]);

    $otp = rand(1000, 9999);

    DB::table('password_resets')->updateOrInsert(
        ['email' => $request->email],
        [
            'token'      => $otp,
            'verified'   => false,
            'created_at' => now(),
        ]
    );

    Mail::raw("Your OTP code is: $otp \nThis code expires in 10 minutes.", function ($message) use ($request) {
        $message->to($request->email)
                ->subject('Password Reset OTP');
    });

    return response()->json(['message' => 'OTP sent successfully']);
});

// ─────────────────────────────────────────
// STEP 2 — Verify OTP
// ─────────────────────────────────────────
Route::post('/verify-otp', function (Request $request) {

    $request->merge(['email' => trim(strtolower($request->email))]);

    $request->validate([
        'email' => 'required|email',
        'otp'   => 'required|digits:4',
    ]);

    $record = DB::table('password_resets')
        ->where('email', $request->email)
        ->first();

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

    DB::table('password_resets')
        ->where('email', $request->email)
        ->update(['verified' => true]);

    return response()->json(['message' => 'OTP verified successfully']);
});

// ─────────────────────────────────────────
// STEP 3 — Reset Password
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
        return response()->json([
            'message' => 'Please verify your OTP before resetting password.',
        ], 403);
    }

    $user = \App\Models\User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found.'], 404);
    }

    $user->update([
        'password' => Hash::make($request->password),
    ]);

    DB::table('password_resets')
        ->where('email', $request->email)
        ->delete();

    return response()->json([
        'message' => 'Password reset successful. You can now log in.',
    ]);
});
