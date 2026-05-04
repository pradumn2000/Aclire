<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    //  REQUIRED FOR SIGNUP
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    //  HIDE SENSITIVE DATA
    protected $hidden = [
        'password',
        'remember_token',
    ];

    //  CASTS
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}