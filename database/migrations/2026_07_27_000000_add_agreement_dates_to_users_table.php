<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'agreement_start_date')) {
                $table->date('agreement_start_date')->nullable();
            }

            if (!Schema::hasColumn('users', 'agreement_end_date')) {
                $table->date('agreement_end_date')->nullable();
            }

            if (!Schema::hasColumn('users', 'agreement_url')) {
                $table->string('agreement_url')->nullable();
            }
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'agreement_url')) {
                $table->dropColumn('agreement_url');
            }

            // Leave these alone because they were created
            // by the earlier 2026_07_23 migration.
        });
    }
};