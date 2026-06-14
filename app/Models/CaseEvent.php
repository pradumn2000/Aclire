<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaseEvent extends Model
{
    protected $fillable = [
        'case_id', 'type', 'title', 'description', 'meta', 'actor_id', 'actor_name',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public static function log(string $caseId, string $type, string $title, ?string $description = null, array $meta = [], $user = null): self
    {
        return self::create([
            'case_id'     => $caseId,
            'type'        => $type,
            'title'       => $title,
            'description' => $description,
            'meta'        => $meta,
            'actor_id'    => $user?->id,
            'actor_name'  => $user?->name,
        ]);
    }
}