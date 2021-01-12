<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {

    Route::get('/user-dashboard','HomeController@index');
    Route::get('/get/user/info','HomeController@getAuthUserData');

});


// it should be at the bottom of every routes
Route::get('/{path}','HomeController@index');


?>
