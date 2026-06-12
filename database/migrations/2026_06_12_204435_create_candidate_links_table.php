<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('candidate_links', function (Blueprint $table) {
            $table->id();
            $table->string('token')->unique();
            $table->string('candidate_name');
            $table->string('email');
            $table->string('mobile')->nullable();
            $table->string('position')->nullable();
            $table->json('checks');
            $table->string('expiry')->default('72h');
            $table->string('status')->default('pending'); // pending, submitted
            $table->unsignedBigInteger('client_id'); // FK to users.id (client role)
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            $table->foreign('client_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('candidate_links');
    }
};