<?php

namespace App\Http\Controllers\Frontend;

use App\Article;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        $articles = Article::latest('created_at')->paginate(5);

        return view('frontend.pages.index', [
            'articles'    => $articles,
            'type'        => 'website',
            'title'       => 'Andre Figueira',
            'description' => 'I\'m a systems engineer with a passion for building web applications, I also run a Youtube channel dedicated to programming...',
            'author'      => 'Andre Figueira',
        ]);
    }
}
