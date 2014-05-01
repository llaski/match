<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();
		// $this->call('UserSeeder');
		// $this->call('TasksSeeder');
		// $this->call('ContactsSeeder');

		$this->call('DocumentsTableSeeder');
		$this->call('NotesTableSeeder');

	}

}