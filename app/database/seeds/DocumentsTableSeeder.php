<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class DocumentsTableSeeder extends Seeder {

	public function run()
	{
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('documents')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        // Document::truncate();
        // DB::raw("SET foreign_key_checks=1");

		$faker = Faker::create();

		foreach(range(1, 10) as $index)
		{
			Document::create([
                'text' => $faker->text
            ]);
		}
	}

}