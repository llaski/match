<?php

class Document extends \Eloquent {
	protected $guarded = [];

    public function notes()
    {
        return $this->hasMany('Note');
    }
}