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

// require(['models/slide', 'views/slide'], function(SlideModel, slideView) {
//     var slide = new SlideModel({
//         title : "First Slide"
//     });

//     var slideView = new slideView({
//         model: slide
//     });

//     console.log(slideView.render().el);
// });
