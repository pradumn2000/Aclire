<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientRegistration extends Model
{
    protected $fillable = [
        'company_name', 'address', 'gstin', 'primary_contact', 'contact_phone',
        'contact_email', 'billing_mode', 'agreed_checks', 'notes',
        'status', 'converted_user_id',
    ];

    protected $casts = ['agreed_checks' => 'array'];
}