@extends('frontend.layout')

@include('js.prism')

@section('js')
    <script src="js/article.js"></script>
@append

@section('content')
    <div class="row">
        <div class="col-sm-9 blog-main col-sm-offset-2">
            @include('frontend.partials.article', ['preview' => false])
        </div><!-- /.blog-main -->
    </div><!-- /.row -->
@endsection