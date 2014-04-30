define(['backbone'], function(Backbone){
    var Main = Backbone.Router.extend({
        routes : {
            '' : 'home', //default
            'slides/:id' : 'showSlide'
        },

        home: function() {
            console.log(App);
            App.Vent.trigger('init');
        },

        showSlide: function(slideIndex) {
            App.Vent.trigger('changeSlide', {
                slideIndex : slideIndex,
                direction : 'next'
            });
        }
    });

    return Main;
});
