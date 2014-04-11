@extends('layout')
@section('content')
    {{ Form::open([ 'route' => 'user/request', 'autocomplete' => 'off' ]) }}
        {{ Form::label('email', 'Email') }}
        {{ Form::text('email', Input::old('email'), ['placeholder' => 'john.smith@example.com']) }}

        {{ Form::submit('Reset') }}
    {{ Form::close() }}
@stop
@section("footer")
    @parent
    <script src="//polyfill.io"></script>
@stop