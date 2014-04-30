define(['backbone', 'helpers'], function(Backbone, Helpers){
    var Slide = Backbone.View.extend({
        className : 'slide',

        render : function() {
            var type = this.getContentType();
            this['render' + Helpers.capitalize(type)]();
            return this;
        },

        getContentType: function() {
            if (this.model.get('image')) {
                return 'image';
            } else if (this.model.get('snippet')) {
                return 'snippet';
            } else if (this.model.get('bullets')) {
                return 'bullets';
            } else if (this.model.get('quote')) {
                return 'quote';
            } else {
                return 'heading';
            }
        },

        renderImage: function() {
            this.$el.addClass('image').append('<img src="' + this.model.get('image') + '">');
        },

        renderBullets: function() {
            var $el = this.$el;
            $el.addClass('bullets');

            if (this.model.get('title')) this.renderHeading();
            $el.append(['<ul>', '<li>' + this.model.get('bullets').join('</li><li>') + '</li>', '</ul>'].join(''));
        },

        renderHeading: function() {
            this.$el.append(
                '<h1 class="' + this.model.get('size') + '">' + this.model.get('title')  + '</h1>'
            );
        },

        renderQuote: function() {
            this.$el
                .addClass('quote')
                .append([
                    '<blockquote>',
                    this.model.get('quote'),
                    '</blockquote>',
                    '<figcaption>',
                    '<cite>',
                    this.model.get('author'),
                    '</cite>',
                    '</figcaption>'
                    ].join(''));
        },

        renderSnippet: function() {
            var self = this;
            var snippet = this.model.get('snippet');
            this.$el.addClass('snippet');
            if (this.model.get('title')) this.renderHeading();

            if ($.isPlainObject(snippet)) {
                return _.each(snippet, function(snippetPath, heading){
                    self.setSnippet(snippetPath, heading);
                });
            }

            self.setSnippet(snippet);

        },

        setSnippet: function(snippetPath, heading) {
            var self = this;

            $.get(snippetPath, function(snippet){
                if (heading) self.$el.append('<h3>' + heading +'</h3>');
                self.$el.append('<pre class="prettyprint">' + _.escape(snippet) + '</pre>');
                prettyPrint();
            });
        }
    });

    return Slide;
})
