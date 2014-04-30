require.config({
    shim: {
        'backbone' : {
            deps : ['underscore', 'jquery'],
            exports : 'backbone'
        }
    },

    paths: {
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        jquery: '../bower_components/jquery/dist/jquery'
    }
});

require(['backbone'], function (Backbone) {
    console.log(Backbone);
});
