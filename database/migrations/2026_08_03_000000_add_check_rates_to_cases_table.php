<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('cases', function (Blueprint $table) {
            // Per-check amount snapshot (mirrors check_tat), so the amount a
            // client agreed to for each check on THIS case is preserved
            // independently of edits to their account-level check_rates
            // later on. Admin-editable per case; never client-writable.
            $table->json('check_rates')->nullable()->after('check_tat');
        });
    }

    public function down(): void
    {
        Schema::table('cases', function (Blueprint $table) {
            $table->dropColumn('check_rates');
        });
    }
};