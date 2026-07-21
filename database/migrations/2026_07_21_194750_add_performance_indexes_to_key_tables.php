<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // USERS table
        Schema::table('users', function (Blueprint $table) {
            $table->index('role');                    // For role-based queries
            $table->index('email');                   // Login & uniqueness
            $table->index('created_at');              // Recent clients
            $table->index(['role', 'created_at']);    // Admin + recent clients
        });

        // CLIENT_REGISTRATIONS table
        Schema::table('client_registrations', function (Blueprint $table) {
            $table->index('status');                  // Pending filtering
            $table->index('contact_email');           // Uniqueness + lookup
            $table->index('created_at');              // Ordering
            $table->index(['status', 'created_at']);  // Main pending list query
        });

        // BGV CASES table
        Schema::table('bgv_cases', function (Blueprint $table) {
            $table->index('status');                  // Dashboard stats & filters
            $table->index('case_id');                 // Primary lookup
            $table->index('client_name');             // Client filtering
            $table->index('candidate_email');         // Candidate lookup
            $table->index('created_by');              // My cases (client)
            $table->index('created_at');              // Timeline & ordering
            $table->index(['status', 'created_at']);  // Common combined query
            $table->index(['client_id', 'status']);   // Client-specific cases
        });

        // CANDIDATE LINKS
        Schema::table('candidate_links', function (Blueprint $table) {
            $table->index('token');                   // Fast lookup by token
            $table->index('status');                  // Submitted / pending
            $table->index('client_id');               // Per client links
            $table->index('expires_at');              // Expiry checks
        });

        // CASE EVENTS (Timeline)
        Schema::table('case_events', function (Blueprint $table) {
            $table->index('case_id');                 // Timeline per case
            $table->index('created_at');              // Chronological order
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['role']);
            $table->dropIndex(['email']);
            $table->dropIndex(['created_at']);
            $table->dropIndex(['role', 'created_at']);
        });

        Schema::table('client_registrations', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['contact_email']);
            $table->dropIndex(['created_at']);
            $table->dropIndex(['status', 'created_at']);
        });

        Schema::table('bgv_cases', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['case_id']);
            $table->dropIndex(['client_name']);
            $table->dropIndex(['candidate_email']);
            $table->dropIndex(['created_by']);
            $table->dropIndex(['created_at']);
            $table->dropIndex(['status', 'created_at']);
            $table->dropIndex(['client_id', 'status']);
        });

        Schema::table('candidate_links', function (Blueprint $table) {
            $table->dropIndex(['token']);
            $table->dropIndex(['status']);
            $table->dropIndex(['client_id']);
            $table->dropIndex(['expires_at']);
        });

        Schema::table('case_events', function (Blueprint $table) {
            $table->dropIndex(['case_id']);
            $table->dropIndex(['created_at']);
        });
    }
};