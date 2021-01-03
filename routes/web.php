<?php

use Illuminate\Support\Facades\Route;


Route::prefix('admin')->group(base_path('routes/admin.php'));


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', function () {
    return view('public.public_master');
});



// it should be at the bottom of every routes
Route::get('/{path}', function () {
    return view('public.public_master');
});

