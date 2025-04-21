<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // Asegúrate que welcome.blade.php tenga <div id="app"></div>
})->where('any', '.*'); // Esta línea es clave

Route::get('/', function () {
    return view('welcome');
});