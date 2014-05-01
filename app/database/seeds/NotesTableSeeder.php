<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class NotesTableSeeder extends Seeder {

	public function run()
	{
        Note::truncate();

		$faker = Faker::create();
        $documents = Document::all();

		foreach ($documents as $document)
		{
            foreach(range(1, rand(1, 5)) as $index)
            {
                $note = new Note([
                    'text' => $faker->text
                ]);

                $document->notes()->save($note);
            }
		}
	}

}