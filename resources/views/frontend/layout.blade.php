<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $description }}">
    <meta name="author" content="{{ $author }}">
    <link rel="icon" href="favicon.png">

    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <title>{{ $title }}</title>

    <base href="/">

    <!-- Bootstrap core CSS -->
    <link href="css/app.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    @yield('css')

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <meta property="og:type" content="{{ $type }}" />
    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:description" content="{{ $description }}" />
    <meta property="og:site_name" content="{{ $author }}" />
    <meta property="article:author" content="{{ $author }}" />
    <meta property="og:image" content="https://andrefigueira.com/images/author.jpg" />
    <meta property="og:url" content="https://andrefigueira.com/" />
    <meta property="og:locale" content="en_GB" />

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@andrefigueira">
    <meta name="twitter:title" content="{{ $title }}">
    <meta name="twitter:image:src" content="https://andrefigueira.com/images/author.jpg">
    <meta name="twitter:url" content="https://andrefigueira.com/">
    <meta name="twitter:description" content="{{ $description }}">
    <meta name="twitter:creator" content="@andrefigueira">
</head>
<body>

@include('frontend.partials.header')

<div class="container">
    @yield('content')
</div><!-- /.container -->

@include('frontend.partials.footer')

<script src="js/main.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="js/ie10-viewport-bug-workaround.js"></script>

@yield('js')

</body>
</html>
