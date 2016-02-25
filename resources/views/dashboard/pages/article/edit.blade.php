@extends('dashboard.layouts.dashboard')

@section('content')
    @include('partials.flash')

    @include('dashboard.pages.article.form', [
        'formTitle'  => 'Edit Article',
        'buttonText' => 'Save Changes',
        'formAction' => url('dashboard/articles/update/' . $article->id),
        'method'     => 'PUT',
    ])
@endsection