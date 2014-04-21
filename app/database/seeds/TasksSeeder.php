<?php

class TasksSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tasks = [
            [
                'title' => 'Go to the store'
            ],
            [
                'title' => 'Go to the Golf Course'
            ],
            [
                'title' => 'Go to the Soccer Pitch'
            ]
        ];

        foreach ($tasks as $task)
        {
            DB::table('tasks')->insert($task);
        }
    }

}