@extends('frontend.layout')

@section('content')
    <div class="row">
        <div class="col-sm-9 blog-main col-sm-offset-2">
            @if(count($articles))
                @foreach($articles as $article)
                    @include('frontend.partials.article', ['preview' => true])
                @endforeach

                {!! $articles->render() !!}
            @else
                <p class="alert alert-warning">No articles posted yet :(</p>
            @endif
        </div><!-- /.blog-main -->
    </div><!-- /.row -->
@endsection