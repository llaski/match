<?php

use Illuminate\Support\MessageBag;

class UserController extends Controller {

    public function loginGet()
    {
        $errors = new MessageBag();

        if ($old = Input::old('errors'))
        {
            $errors = $old;
        }

        $data = [
            'errors' => $errors
        ];

        return View::make('user/login', $data);
    }

    public function loginPost()
    {

        $validator = Validator::make(Input::all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($validator->passes())
        {
            $credentials = [
                'username' => Input::get('username'),
                'password' => Input::get('password')
            ];

            if (Auth::attempt($credentials))
            {
                return Redirect::route('user/profile');
            }
        }

        $data['errors'] = new MessageBag([
            'password' => [
                'Username and/or Password Invalid'
            ]
        ]);

        $data['username'] = Input::get('username');

        return Redirect::route("user/login")->withInput($data);
    }

    public function userProfileGet()
    {
        echo 'hey!';
    }
}