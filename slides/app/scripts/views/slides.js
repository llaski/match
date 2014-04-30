define(['backbone', 'views/slide'], function(Backbone, SlideView){
    var Slides = Backbone.View.extend({
        el : '.slides',

        initialize: function() {
            this.renderAll();

            App.Vent.on('init', this.hideAllButFirst, this);
        },

        hideAllButFirst: function() {
            this.$el.children(':nth-child(n+2)').hide();
        },

        renderAll: function() {
            this.$el.empty();
            this.collection.each(this.render, this);
        },

        render: function(slide) {
            var slide = new SlideView({ model : slide });
            this.$el.append(slide.render().el);

            return this;
        }
    });

    return Slides;
})
