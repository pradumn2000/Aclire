<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@aclire.com'],
            [
                'name'     => 'Admin',
                'email'    => 'admin@aclire.com',
                'password' => Hash::make('Admin@123'),
                'role'     => 'admin',
            ]
        );

        $this->command->info('Admin created: admin@aclire.com / Admin@123');
    }
}
