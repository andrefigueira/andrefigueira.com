@if(session()->has('flash_message'))
    @if(session()->get('flash_message.title'))
        @if(session()->get('flash_message.message.message'))
            <p class="alert alert-{{ session()->get('flash_message.level') }}">
                <span class="title">{{ session()->get('flash_message.title') }}</span>
                {!! session()->get('flash_message.message.message') !!}
            </p>
        @else
            <p class="alert alert-{{ session()->get('flash_message.level') }}">
                <span class="title">{{ session()->get('flash_message.title') }}</span>
                {!! session()->get('flash_message.message') !!}
            </p>
        @endif
    @else
        <p class="alert alert-{{ session()->get('flash_message.level') }}">{!! session()->get('flash_message.message') !!}</p>
    @endif

@endif

@if(count($errors))
    <p class="alert alert-warning">
        @foreach($errors->all() as $error)
            {{ $error }}<br>
        @endforeach
    </p>
@endif