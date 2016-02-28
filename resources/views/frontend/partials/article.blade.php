<article class="blog-post" itemid="{{ $article->getCanonical() }}" itemscope itemtype="http://schema.org/BlogPosting">
    @if($preview)
        <h2 class="blog-post-title"><a itemprop="url" href="{{ $article->getCanonical() }}">{{ $article->name }}</a></h2>
    @else
        <h2 class="blog-post-title" itemprop="headline">{{ $article->name }}</h2>
    @endif

    @if(!$preview)
        <p class="blog-post-meta">
            <img src="img/author.jpg" class="author" alt="Author picture">

            <strong><a rel="author" href="https://plus.google.com/u/1/+AndreFigueiraTheGuy?rel=author" target="_blank" itemprop="author" itemscope itemtype="http://schema.org/Person">Andr&eacute; Figueira</a></strong> on <time datetime="{{ $article->created_at }}">{{ $article->created_at->format('jS, F, Y') }}</time>

            &middot;

            <span class="reading-time"></span>
        </p>
    @endif

    @if($preview)
        <section class="blog-post-excerpt" itemprop='description'>{!! $article->excerpt !!}</section>
    @else
        <section class="blog-post-content" itemprop="articleBody">{!! markdown($article->content) !!}</section>
    @endif
</article><!-- /.blog-post -->

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