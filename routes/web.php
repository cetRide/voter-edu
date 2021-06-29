<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/manage-events', function () {
    return view('calendar.admin-calendar');
});
Route::get('/view-events', function () {
    return view('calendar.index');
});
Route::get('/polling-stations', function () {
    return view('polling-station.view-polling');
});
Route::get('/manage-polling-stations', function () {
    return view('polling-station.admin-polling');
});
Route::get('/cast-vote', function () {
    return view('polling-station.cast');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
