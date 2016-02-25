<?php

namespace App\Http\Controllers\Frontend;

use App\Article;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function view($year, $month, $day, $permalink)
    {
        $article = Article::where('permalink', $permalink)->firstOrFail();

        return view('frontend.pages.article', [
            'article' => $article,
            'type'        => 'article',
            'title'       => $article->name,
            'description' => $article->excerpt,
            'author'      => 'Andre Figueira',
        ]);
    }
}
