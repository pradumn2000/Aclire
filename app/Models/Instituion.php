<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    protected $fillable = [
        'type',
        'name',
        'code',
        'state',
        'website',
        'stature',
        'aicte',
        'accredited',
        'level',
        'verified',
        'status',
    ];

    protected $casts = [
        'accredited' => 'boolean',
        'verified'   => 'boolean',
    ];

    protected $attributes = [
        'status'     => 'active',
        'verified'   => false,
        'accredited' => false,
    ];
}