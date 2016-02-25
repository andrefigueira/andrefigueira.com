@extends('dashboard.layouts.dashboard')

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Articles</h3>

                    <div class="box-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                            <div class="input-group-btn">
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    @if(count($articles))
                        <table class="table">
                            <tbody>
                            <tr>
                                <th>name</th>
                                <th>permalink</th>
                                <th>Date</th>
                            </tr>
                            @foreach($articles as $article)
                                <tr>
                                    <td><a href="dashboard/articles/edit/{{ $article->id }}">{{ $article->name }}</a></td>
                                    <td>{{ $article->permalink }}</td>
                                    <td>{{ $article->created_at->format('Y-m-d') }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>

                        {!! $articles->render() !!}
                    @else
                        <p class="alert alert-warning">No articles created yet...</p>
                    @endif
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
@endsection