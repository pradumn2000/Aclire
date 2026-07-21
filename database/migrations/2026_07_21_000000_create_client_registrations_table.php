<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('client_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('address');
            $table->string('gstin');
            $table->string('primary_contact');
            $table->string('contact_phone')->nullable();
            $table->string('contact_email')->unique();
            $table->string('billing_mode')->nullable();
            $table->json('agreed_checks')->nullable();
            $table->text('notes')->nullable();
            $table->string('status')->default('pending'); // pending | converted | rejected
            $table->unsignedBigInteger('converted_user_id')->nullable();
            $table->timestamps();
        });
    }
    public function down() {
        Schema::dropIfExists('client_registrations');
    }
};