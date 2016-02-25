<?php

namespace App\Http\Controllers\Dashboard;

use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('authed');
    }

    public function index()
    {
        return view('dashboard.pages.index', ['user' => Auth::user()]);
    }
}
