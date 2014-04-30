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
        jquery: '../bower_components/jquery/dist/jquery',
        prettify: '../bower_components/google-code-prettify/src/prettify',
    }
});

require(['views/app', 'prettify'], function(AppView) {
    window.App = {
        Vent : _.extend({}, Backbone.Events)
    };
    new AppView();
});
