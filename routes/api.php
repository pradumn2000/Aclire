<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

Route::post('/login', function (Request $request) {

    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    // if (!Auth::attempt($request->only('email', 'password'))) {
    //     return response()->json([
    //         'message' => 'Invalid credentials'
    //     ], 401);
    // }
    if (!Auth::attempt($request->only('email', 'password'))) {
    return response()->json([
        'message' => 'Invalid credentials',
        'debug_email' => $request->email,
        'debug_password' => $request->password,
    ], 401);
}

    $user = Auth::user();

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token
    ]);
});


Route::post('/register', function (Request $request) {

    $data = [
        'name' => $request->username,
        'email' => $request->email,
        'password' => $request->password,
        'password_confirmation' => $request->confirmPassword,
    ];

    validator($data, [
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:6|confirmed',
    ])->validate();

    $user = \App\Models\User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => \Illuminate\Support\Facades\Hash::make($data['password']),
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token
    ]);
});
Route::post('/send-otp', function (Request $request) {

    $request->validate([
        'email' => 'required|email|exists:users,email'
    ]);

    $otp = rand(100000, 999999);

    DB::table('password_resets')->updateOrInsert(
        ['email' => $request->email],
        [
            'token' => $otp,
            'created_at' => now()
        ]
    );

    Mail::raw("Your OTP is: $otp", function ($message) use ($request) {
        $message->to($request->email)
                ->subject('Password Reset OTP');
    });

    return response()->json([
        'message' => 'OTP sent successfully'
    ]);
});
Route::post('/verify-otp', function (Request $request) {

    $request->validate([
        'email' => 'required|email',
        'otp' => 'required'
    ]);

    $record = DB::table('password_resets')
        ->where('email', $request->email)
        ->first();

    if (!$record) {
        return response()->json(['message' => 'OTP not found'], 400);
    }

    if ($record->token != $request->otp) {
        return response()->json(['message' => 'Invalid OTP'], 400);
    }

    // optional: expiry check
    if (now()->diffInMinutes($record->created_at) > 5) {
        return response()->json(['message' => 'OTP expired'], 400);
    }

    return response()->json(['message' => 'OTP verified']);
});

// Route::post('/reset-password', function (Request $request) {

//     $request->validate([
//         'email' => 'required|email',
//         'password' => 'required|min:6|confirmed',
//     ]);

//     $user = \App\Models\User::where('email', $request->email)->first();

//     if (!$user) {
//         return response()->json(['message' => 'User not found'], 404);
//     }

//     // update password
//     $user->update([
//         'password' => $request->password
//     ]);

//     // delete OTP after success
//     DB::table('password_resets')
//         ->where('email', $request->email)
//         ->delete();

//     return response()->json([
//         'message' => 'Password reset successful'
//     ]);
// });
Route::post('/reset-password', function (Request $request) {

    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:6|confirmed',
    ]);

    $user = \App\Models\User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // ✅ DO NOT HASH HERE
    $user->update([
        'password' => $request->password
    ]);

    DB::table('password_resets')
        ->where('email', $request->email)
        ->delete();

    return response()->json([
        'message' => 'Password reset successful'
    ]);
});