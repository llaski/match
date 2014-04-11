@extends('layout')
@section('content')
    {{ Form::open([ 'route' => 'user/login', 'autocomplete' => 'off' ]) }}
        {{ Form::label('username', 'Username') }}
        {{ Form::text('username', Input::old('username'), ['placeholder' => 'larry.laski']) }}
        {{ Form::label('password', 'Password') }}
        {{ Form::password('password', ['placeholder' => '●●●●●●●●●●']) }}

        @if ($error = $errors->first('password'))
            <div class="error">
                {{ $error }}
            </div>
        @endif
        {{ Form::submit('Login') }}
    {{ Form::close() }}
@stop
@section("footer")
    @parent
    <script src="//polyfill.io"></script>
@stop