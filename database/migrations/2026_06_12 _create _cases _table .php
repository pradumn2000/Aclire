<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cases', function (Blueprint $table) {
            $table->id();
            $table->string('case_id')->unique();           // BGV-2501
            $table->string('candidate_name');
            $table->string('candidate_email');
            $table->string('candidate_mobile')->nullable();
            $table->string('position')->nullable();
            $table->string('client_name');
            $table->integer('client_id')->nullable();
            $table->json('checks');                        // ["employment","education"]
            $table->enum('priority', ['normal','high','urgent'])->default('normal');
            $table->enum('billing_mode', ['prepaid_client','prepaid_candidate','postpaid_client']);
            $table->string('payment_timing')->nullable();
            $table->string('invoice_cycle')->nullable();
            $table->string('po_number')->nullable();
            $table->integer('total_amount')->default(0);
            $table->string('payment_link')->nullable();
            $table->enum('status', ['pending','in-progress','qc-review','completed','on-hold'])
                  ->default('pending');
            $table->json('check_results')->nullable();     // verifier results per check type
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cases');
    }
};
