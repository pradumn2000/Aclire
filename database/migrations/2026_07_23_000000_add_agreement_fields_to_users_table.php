<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'agreement_path')) {
                $table->string('agreement_path')->nullable()->after('notes');
            }
            if (!Schema::hasColumn('users', 'agreement_start_date')) {
                $table->date('agreement_start_date')->nullable()->after('agreement_path');
            }
            if (!Schema::hasColumn('users', 'agreement_end_date')) {
                $table->date('agreement_end_date')->nullable()->after('agreement_start_date');
            }
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['agreement_path', 'agreement_start_date', 'agreement_end_date']);
        });
    }
};