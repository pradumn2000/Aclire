<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('institutions', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['university', 'lab', 'court']);
            $table->string('name');
            $table->string('code', 20)->nullable();
            $table->string('state')->nullable();
            $table->string('website')->nullable();

            // university-specific
            $table->string('stature')->nullable();   // government / private / autonomous / deemed
            $table->string('aicte')->nullable();      // approved / not_approved / applied

            // lab-specific
            $table->boolean('accredited')->default(false); // NABL accredited

            // court-specific (free for future use)
            $table->string('level')->nullable();

            $table->boolean('verified')->default(false);
            $table->string('status')->default('active'); // active | inactive

            $table->timestamps();

            $table->index(['type', 'status']);
            $table->index('name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('institutions');
    }
};