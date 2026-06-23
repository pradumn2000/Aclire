<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * The original migration defined `role` as:
     *
     *   $table->enum('role', [
     *       'admin', 'allocator', 'verifier', 'check_manager',
     *       'report_writing', 'pvt_qc', 'client', 'onboarding',
     *   ])->default('verifier')->after('email');
     *
     * On SQLite, enum() is implemented as a CHECK (role IN (...)) constraint
     * baked into the column itself — it has nothing to do with Laravel's
     * validate() rules. The 7 new specialist verifier roles
     * (employment_verifier, education_verifier, address_verifier,
     * database_verifier, criminal_verifier, drug_test_verifier,
     * courtroom_verifier) were added to the validation in routes/api.php,
     * but never to this constraint — so every insert/update using one of
     * them fails at the database layer with SQLSTATE[23000].
     *
     * SQLite has no ALTER COLUMN / DROP CONSTRAINT, so the column has to be
     * rebuilt. This migration does that safely, preserving existing values,
     * the original default ('verifier'), and the original position
     * (after `email`).
     */
    public function up(): void
    {
        // 1. Temp column to hold existing values across the rebuild
        if (!Schema::hasColumn('users', 'role_tmp')) {
            Schema::table('users', function (Blueprint $table) {
                $table->string('role_tmp')->nullable();
            });
        }

        DB::statement('UPDATE users SET role_tmp = role');

        // 2. Drop the old enum/CHECK-constrained column entirely
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });

        // 3. Re-add role as a plain string — no CHECK constraint.
        //    Same default and same position as the original migration.
        //    Allowed-value validation now lives only in Laravel
        //    (routes/api.php), which is the only place it should live,
        //    since the role list will keep growing.
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('verifier')->after('email');
        });

        DB::statement('UPDATE users SET role = role_tmp');

        // 4. Drop the temp column
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role_tmp');
        });
    }

    /**
     * Reverse the migrations.
     *
     * Left as a no-op: restoring the narrow enum() CHECK constraint here
     * would immediately break again for any user already saved with one
     * of the 7 new specialist roles. If you need to roll back, restore the
     * enum manually only after confirming no rows use the new role values.
     */
    public function down(): void
    {
        //
    }
};