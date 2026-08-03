<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name',
        'code',
        'industry',
        'scope',
        'state',
        'website',
        'verified',
        'status',
    ];

    protected $casts = [
        'verified' => 'boolean',
    ];

    protected $attributes = [
        'status'   => 'active',
        'verified' => false,
    ];
}