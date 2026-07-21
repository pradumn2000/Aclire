<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // USERS table
        Schema::table('users', function (Blueprint $table) {
            $table->index('role');
            $table->index('email');
            $table->index('created_at');
            $table->index(['role', 'created_at']);
        });

        // CLIENT_REGISTRATIONS table
        Schema::table('client_registrations', function (Blueprint $table) {
            $table->index('status');
            $table->index('contact_email');
            $table->index('created_at');
            $table->index(['status', 'created_at']);
        });

        // CASES table
        Schema::table('cases', function (Blueprint $table) {
            $table->index('status');
            $table->index('case_id');
            $table->index('client_name');
            $table->index('candidate_email');
            $table->index('created_by');
            $table->index('created_at');
            $table->index(['status', 'created_at']);
            $table->index(['client_id', 'status']);
        });

        // CANDIDATE LINKS table
        Schema::table('candidate_links', function (Blueprint $table) {
            $table->index('token');
            $table->index('status');
            $table->index('client_id');
            $table->index('expires_at');
        });

        // CASE EVENTS table
        Schema::table('case_events', function (Blueprint $table) {
            // case_id index already exists in create_case_events_table migration
            $table->index('created_at');
        });
    }

    public function down(): void
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

        Schema::table('cases', function (Blueprint $table) {
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
            $table->dropIndex(['created_at']);
        });
    }
};