<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('cases', function (Blueprint $table) {
            if (!Schema::hasColumn('cases', 'tat')) {
                // Case-level turnaround time, in days — set by admin from
                // the max of the per-check TATs (overall_tat in the frontend).
                $table->float('tat')->nullable()->after('total_amount');
            }
            if (!Schema::hasColumn('cases', 'check_tat')) {
                // Per-check TAT breakdown, e.g. {"employment": 3, "education": 5}
                $table->json('check_tat')->nullable()->after('tat');
            }
        });
    }

    public function down()
    {
        Schema::table('cases', function (Blueprint $table) {
            $table->dropColumn(['tat', 'check_tat']);
        });
    }
};