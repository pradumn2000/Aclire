<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

// ─────────────────────────────────────────
// REGISTER
// ─────────────────────────────────────────
Route::post('/register', function (Request $request) {

    $data = [
        'name'                  => $request->username,
        'email'                 => $request->email,
        'password'              => $request->password,
        'password_confirmation' => $request->confirmPassword,
    ];

    validator($data, [
        'name'     => 'required|string|max:255',
        'email'    => 'required|email|unique:users,email',
        'password' => 'required|min:6|confirmed',
    ])->validate();

    $user = \App\Models\User::create([
        'name'     => $data['name'],
        'email'    => $data['email'],
        'password' => Hash::make($data['password']),
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'user'  => $user,
        'token' => $token,
    ]);
});

// ─────────────────────────────────────────
// LOGIN
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
        'user'  => $user,
        'token' => $token,
    ]);
});

// ─────────────────────────────────────────
// STEP 1 — Send OTP
// ─────────────────────────────────────────
Route::post('/forgot-password', function (Request $request) {

    $request->merge(['email' => trim(strtolower($request->email))]);

    $request->validate([
        'email' => 'required|email|exists:users,email',
    ]);

    $otp = rand(1000, 9999); // 4-digit OTP

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

    return response()->json([
        'message' => 'OTP sent successfully',
    ]);
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

    // Check expiry — 10 minutes
    if (now()->diffInMinutes($record->created_at) > 10) {
        DB::table('password_resets')->where('email', $request->email)->delete();
        return response()->json(['message' => 'OTP has expired. Please request a new one.'], 400);
    }

    if ($record->token != $request->otp) {
        return response()->json(['message' => 'Invalid OTP. Please try again.'], 400);
    }

    // ✅ Mark OTP as verified
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

    // ✅ Only allow reset if OTP was verified
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

    // ✅ Hash password before saving
    $user->update([
        'password' => Hash::make($request->password),
    ]);

    // ✅ Delete OTP record after successful reset
    DB::table('password_resets')
        ->where('email', $request->email)
        ->delete();

    return response()->json([
        'message' => 'Password reset successful. You can now log in.',
    ]);
});