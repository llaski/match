define(['backbone', 'views/slides', 'collections/slides', 'router'], function(Backbone, SlidesView, SlidesCollection, MainRouter){
    var AppView = Backbone.View.extend({
        el : 'body',

        initialize: function() {

            new SlidesView({
                collection : new SlidesCollection(window.slides)
            });

            App.router = new MainRouter();
            Backbone.history.start();
        },

        events : {
            'keyup' : 'keyup'
        },

        keyup: function(evt) {
            //37 - left, 39 - right
            if (evt.keyCode === 37 || evt.keyCode === 39) {
                App.Vent.trigger('changeSlide', {
                    direction : evt.keyCode === 39 ? 'next' : 'prev'
                });
            }
        }
    });

    return AppView;
});
