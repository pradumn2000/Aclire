<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'address')) {
                $table->text('address')->nullable();
            }
            if (!Schema::hasColumn('users', 'priority')) {
                $table->string('priority')->nullable()->default('normal');
            }
            if (!Schema::hasColumn('users', 'total_amount')) {
                $table->decimal('total_amount', 12, 2)->nullable()->default(0);
            }
            if (!Schema::hasColumn('users', 'notes')) {
                $table->text('notes')->nullable();
            }
        });
    }

    public function down() {
        Schema::table('users', function (Blueprint $table) {
            foreach (['address', 'priority', 'total_amount', 'notes'] as $col) {
                if (Schema::hasColumn('users', $col)) {
                    $table->dropColumn($col);
                }
            }
        });
    }
};