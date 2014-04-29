<?php

class AngularController extends Controller {

    public function index()
    {
        return View::make('angular.index');
    }

    public function contacts()
    {
        return View::make('angular.routing');
    }

}