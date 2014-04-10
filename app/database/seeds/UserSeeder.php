<?php

class UserSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'username' => 'llaski',
                'password' => Hash::make('213kj1h23jl123'),
                'email' => 'llaski@resolute.com'
            ]
        ];

        foreach ($users as $user)
        {
            User::create($user);
        }
    }

}