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
    'check_results',
    'check_details',   // ← added
    'notes',
    'created_by',
];

protected $casts = [
    'checks' => 'array',
    'check_results' => 'array',
    'check_details' => 'array',   // ← added
    'total_amount' => 'float',
];