<?php

use Illuminate\Support\Facades\Route;

// '/' this refers /admin here for the prefix in routes.php

Route::get('/login','Admin\LoginController@showLoginForm')->name('admin.login');
Route::post('/login','Admin\LoginController@login')->name('admin.login.post');


Route::group(['middleware' => 'auth:admin'], function () {

    Route::get('/',function(){
        return view('admin.admin_master');
    })->name('admin.dashboard');

});


// it should be at the bottom of every routes
Route::get('/{path}', function () {
    return view('admin.admin_master');
});



?>
