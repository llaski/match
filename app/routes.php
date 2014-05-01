<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('/home', function()
{
    return 'Home Page';
});

Route::get('/info', function(){
    phpinfo();
});

Route::get('/login', [
    'as' => 'user/login',
    'uses' => 'UserController@loginGet'
]);

Route::post('/login', [
    'as' => 'user/login',
    'uses' => 'UserController@loginPost'
]);

Route::get('/profile', [
    'as' => 'user/profile',
    'uses' => 'UserController@userProfileGet'
]);

Route::group(array('prefix' => '/backbone'), function() {

    Route::any('/', 'BackboneController@index');

    Route::resource('tasks', 'TasksController');
    Route::resource('contacts', 'ContactsController');
});

Route::group(array('prefix' => '/advanced-backbone'), function() {

    Route::any('/', 'BackboneController@advancedIndex');
    Route::get('/documents', 'BackboneController@advancedDocuments');
    Route::post('/documents', 'BackboneController@postAdvancedDocuments');
    Route::get('/documents/{id}', 'BackboneController@getAdvancedDocument')->where('id', '[0-9]+');
    Route::put('/documents/{id}', 'BackboneController@putAdvancedDocument')->where('id', '[0-9]+');

    Route::get('/documents/{id}/notes', 'BackboneController@advancedNotes')->where('id', '[0-9]+');
    Route::post('/documents/{id}/notes', 'BackboneController@postAdvancedNotes')->where('id', '[0-9]+');
    Route::put('/documents/{id}/notes/{note_id}', 'BackboneController@putAdvancedNotes')->where('id', '[0-9]+')->where('note_id', '[0-9]+');
});

Route::group(array('prefix' => '/angular'), function() {

    Route::any('/', 'AngularController@index');
    Route::any('/contacts', 'AngularController@contacts');
});

Route::group(array('prefix' => '/chat'), function(){

    Route::any('/', function(){
        return View::make('chat.index');
    });
});