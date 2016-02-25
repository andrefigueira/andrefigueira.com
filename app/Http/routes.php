<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/dashboard/home', 'Dashboard\HomeController@index');
    Route::get('/dashboard/articles/view', 'Dashboard\ArticleController@index');

    Route::get('/dashboard/articles/edit/{id}', 'Dashboard\ArticleController@edit');
    Route::put('/dashboard/articles/update/{id}', 'Dashboard\ArticleController@update');

    Route::get('/dashboard/articles/create', 'Dashboard\ArticleController@create');
    Route::post('/dashboard/articles/store', 'Dashboard\ArticleController@store');

    Route::delete('/dashboard/articles/destroy/{id}', 'Dashboard\ArticleController@destroy');
});

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'Frontend\IndexController@index');
    Route::get('/{year}/{month}/{day}/{permalink}', 'Frontend\ArticleController@view');
});