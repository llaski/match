<?php

class BackboneController extends Controller {

    public function index()
    {
        return View::make('backbone.index');
    }

    public function advancedIndex()
    {
        $data = [
            'documents' => Document::with('notes')->get()
        ];

        return View::make('advanced-backbone.index', $data);
    }

    public function advancedDocuments()
    {
        $documents = Document::all();

        return Response::json($documents);
    }

    public function postAdvancedDocuments()
    {
        $doc = new Document([
            'text' => Input::get('text')
        ]);

        $doc->save();

        return Response::json($doc);
    }

    public function getAdvancedDocument($id)
    {
        return Response::json(Document::find($id));
    }

    public function putAdvancedDocument($id)
    {
        $doc = Document::find($id);
        $doc->text = Input::get('text');
        $doc->save();

        return Response::json($doc);
    }


    public function advancedNotes($document_id)
    {
        $notes = Note::where('document_id', $document_id)->get();
        return Response::json($notes);
    }

    public function postAdvancedNotes($document_id)
    {
        $doc = Document::find($document_id);
        $note = new Note([
            'text' => Input::get('text')
        ]);
        $doc->notes()->save($note);

        return Response::json($note);
    }

    public function putAdvancedNotes($document_id, $note_id)
    {
        $note = Note::find($note_id);
        $note->text = Input::get('text');
        $note->save();

        return Response::json($note);
    }

}