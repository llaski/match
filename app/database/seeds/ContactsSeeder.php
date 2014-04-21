<?php

class ContactsSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contacts = [
            [
                'first_name' => 'John',
                'last_name' => 'Doe',
                'email' => 'john.doe@doe.com',
                'description' => 'Lonely John'
            ],
            [
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'email' => 'jane.smith@smith.com',
                'description' => 'What a day'
            ],
            [
                'first_name' => 'Hard',
                'last_name' => 'Knocks',
                'email' => 'jets.jets@jets.com',
                'description' => 'J! E! T! S!'
            ],
        ];

        foreach ($contacts as $contact)
        {
            DB::table('contacts')->insert($contact);
        }
    }

}