<?php

namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests;

class IndexController extends Controller
{
    public function index()
    {
        $articles = Article::paginate(5);

        return view('frontend.pages.index', [
            'articles'    => $articles,
            'type'        => 'website',
            'title'       => 'Andre Figueira',
            'description' => 'I\'m a systems engineer with a passion for building web applications, I also run a Youtube channel dedicated to programming...',
            'author'      => 'Andre Figueira',
        ]);
    }
}
