<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('gstin')->nullable();
            $table->string('primary_contact')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('billing_mode')->nullable();
            $table->json('agreed_checks')->nullable();
            $table->json('check_rates')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['gstin', 'primary_contact', 'contact_phone', 'billing_mode', 'agreed_checks', 'check_rates']);
        });
    }
};