@extends('dashboard.layouts.dashboard')

@section('content')
    @include('partials.flash')

    @include('dashboard.pages.article.form', [
        'formTitle'  => 'Create Article',
        'buttonText' => 'Create Article',
        'formAction' => url('dashboard/articles/store'),
    ])
@endsection