define(['backbone', 'views/slides', 'collections/slides', 'router'], function(Backbone, SlidesView, SlidesCollection, MainRouter){
    var AppView = Backbone.View.extend({
        el : 'body',

        initialize: function() {
            var collect = [
                {
                    title : 'first slide'
                },
                {
                    title : 'second slide'
                }
            ];

            new SlidesView({
                collection : new SlidesCollection(collect)
            });

            App.router = new MainRouter();
            Backbone.history.start();
        }
    });

    return AppView;
});
