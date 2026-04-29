
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return view('welcome');
});

// Auth routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

// Protected route (only logged in users)
Route::middleware('auth')->group(function () {
    Route::get('/', function () {
    return view('welcome');
});
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
