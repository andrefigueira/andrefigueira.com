<div class="blog-post">
    @if($preview)
        <h2 class="blog-post-title"><a href="{{ $article->created_at->format('Y') }}/{{ $article->created_at->format('m') }}/{{ $article->created_at->format('d') }}/{{ $article->permalink }}">{{ $article->name }}</a></h2>
    @else
        <h2 class="blog-post-title">{{ $article->name }}</h2>
    @endif

    @if(!$preview)
        <p class="blog-post-meta">
            <img src="img/author.jpg" class="author" alt="Author picture">
            <strong><a href="https://plus.google.com/u/1/+AndreFigueiraTheGuy" target="_blank">Andr&eacute; Figueira</a></strong> on {{ $article->created_at->format('jS, F, Y') }}

            &middot;

            <span class="reading-time"></span>
        </p>
    @endif

    @if($preview)
        {!! $article->excerpt !!}
    @else
        <div class="blog-post-content">{!! markdown($article->content) !!}</div>
    @endif
</div><!-- /.blog-post -->

@if(!$preview)
    <div id="disqus_thread"></div>
    <script>
        /**
         * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
         * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
         */
        /*
         var disqus_config = function () {
         this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
         this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
         };
         */
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');

            s.src = '//andrefigueira.disqus.com/embed.js';

            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    </script>

    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
@endif