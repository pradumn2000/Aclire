<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('case_events', function (Blueprint $table) {
            $table->id();
            $table->string('case_id');
            $table->string('type');        // created, status_change, check_result, comment, document
            $table->string('title');
            $table->text('description')->nullable();
            $table->json('meta')->nullable();
            $table->unsignedBigInteger('actor_id')->nullable();
            $table->string('actor_name')->nullable();
            $table->timestamps();

            $table->index('case_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('case_events');
    }
};