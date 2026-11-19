<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
})->name('health');

Route::get('/docs', function () {
    return redirect('https://laravel.com/docs');
})->name('docs');