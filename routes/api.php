<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::post('/login', function (Request $request) {

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid credentials'], 401);
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