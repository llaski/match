<?php

class Note extends \Eloquent {
	protected $guarded = [];

    public function document()
    {
        return $this->belongsTo('Document');
    }
}