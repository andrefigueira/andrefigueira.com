<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 1)->create([
            'name'      => 'André Figueira',
            'email'     => 'andre.figueira@me.com',
            'password'  => bcrypt('EelFightNeat=1989'),
        ]);
    }
}
