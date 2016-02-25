@include('js.simplemde')

@section('js')
    <script>
        var simplemde = new SimpleMDE({ element: document.getElementById('content') });

        var slug = function(str) {
            var trimmed = $.trim(str);
            var slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
            replace(/-+/g, '-').
            replace(/^-|-$/g, '');
            return slug.toLowerCase();
        }

        $('input[name=name]').keyup(function () {
            var el = $(this);
            $('input[name=permalink]').val(slug(el.val()));
        });
    </script>
@append

<form action="{{ $formAction }}" class="article-form" method="post">
    {{ csrf_field() }}
    @if(isset($method))
        <input type="hidden" name="_method" value="{{ $method }}">
    @endif
    <div class="row">
        <div class="col-md-12">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ $formTitle }}</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" placeholder="Enter an article name..." autocomplete="off" value="{{ isset($article) ? $article->name : old('name') }}">
                            </div><!-- End form group -->
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="permalink">Permalink</label>
                                <div class="input-group">
                                    <span class="input-group-addon" id="basic-addon3">/year/month/day/</span>
                                    <input type="text" name="permalink" class="form-control" placeholder="Enter an article permalink..." autocomplete="off" value="{{ isset($article) ? $article->permalink : old('permalink') }}">
                                </div><!-- End inputgroup -->
                            </div><!-- End form group -->
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="excerpt">Excerpt</label>
                        <textarea name="excerpt" id="excerpt" class="form-control" placeholder="Enter an excerpt...">{{ isset($article) ? $article->excerpt : old('excerpt') }}</textarea>
                    </div><!-- End form group -->
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea name="content" id="content">{{ isset($article) ? $article->content : old('content') }}</textarea>
                    </div><!-- End form group -->

                    <button type="submit" class="btn btn-success">{{ $buttonText }}</button>
                </div><!-- /.box-body -->
            </div><!-- End box -->
        </div><!-- End col -->
    </div><!-- End row -->
</form>