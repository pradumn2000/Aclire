<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return ['Laravel' => app()->version()];
// });
Route::get('/', function () {
    return view('welcome');
});
Route::get('/Signup',function(){
    return view('welcome');
});

require __DIR__.'/auth.php';


Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');