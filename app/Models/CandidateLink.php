<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CandidateLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'token',
        'candidate_name',
        'email',
        'mobile',
        'position',
        'checks',
        'expiry',
        'status',
        'client_id',
        'expires_at',
    ];

    protected $casts = [
        'checks' => 'array',
        'expires_at' => 'datetime',
    ];

    public static function generateToken(): string
    {
        do {
            $token = Str::random(10);
        } while (self::where('token', $token)->exists());

        return $token;
    }

    public static function expiryToCarbon(string $expiry): Carbon
    {
        return match ($expiry) {
            '24h' => now()->addHours(24),
            '48h' => now()->addHours(48),
            '72h' => now()->addHours(72),
            '7 days' => now()->addDays(7),
            default => now()->addHours(72),
        };
    }
}