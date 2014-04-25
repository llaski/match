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
    Route::get('/docs', 'BackboneController@advancedDocuments');
    Route::get('/notes', 'BackboneController@advancedNotes');
});

Route::group(array('prefix' => '/chat'), function(){

    Route::any('/', function(){
        return View::make('chat.index');
    });
});