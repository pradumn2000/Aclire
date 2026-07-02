<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cases', function (Blueprint $table) {
            $table->date('candidate_dob')->nullable()->after('candidate_mobile');
        });
    }

    public function down(): void
    {
        Schema::table('cases', function (Blueprint $table) {
            $table->dropColumn('candidate_dob');
        });
    }
};