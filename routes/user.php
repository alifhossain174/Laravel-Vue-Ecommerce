<?php

use Illuminate\Support\Facades\Route;

Route::get('/get/user/info',function(){
    return response()->json([
        'user_info' => \Auth::user()
    ],200);
});

// it should be at the bottom of every routes
Route::get('/{path}', function () {
    return view('public.public_master');
});



?>
