<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BGVCase extends Model
{
    protected $table = 'cases';

    protected $fillable = [
        'case_id',
        'candidate_name',
        'candidate_email',
        'candidate_mobile',
        'position',
        'client_name',
        'client_id',
        'checks',
        'priority',
        'billing_mode',
        'payment_timing',
        'invoice_cycle',
        'po_number',
        'total_amount',
        'payment_link',
        'status',
        'notes',
        'created_by',
    ];

    protected $casts = [
        'checks' => 'array',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // Auto-generate BGV case ID
    public static function generateCaseId(): string
    {
        $last = static::orderByDesc('id')->value('case_id');
        if (!$last) return 'BGV-2501';
        $num = (int) substr($last, 4);
        return 'BGV-' . ($num + 1);
    }
}
