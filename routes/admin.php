<?php

use Illuminate\Support\Facades\Route;

// '/' this refers /admin here for the prefix in routes.php

Route::get('/',function(){
    return view('admin.admin_master');
});


// it should be at the bottom of every routes
Route::get('/{path}', function () {
    return view('admin.admin_master');
});



?>
