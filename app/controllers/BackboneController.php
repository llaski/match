<?php

class BackboneController extends Controller {

    public function index()
    {
        return View::make('backbone.index');
    }

    public function advancedIndex()
    {
        return View::make('advanced-backbone.index');
    }

    public function advancedDocuments()
    {
        return Response::json([
            [
                'id' => 1,
                'text' => 'This is the document'
            ]
        ]);
    }

    public function advancedNotes()
    {
        return Response::json([
            1 => [
                [
                    'id' => 1,
                    'text' => 'This is the note',
                ],
                [
                    'id' => 2,
                    'text' => 'This is the other note',
                ]
            ]
        ]);
    }

}