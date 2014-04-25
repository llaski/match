var User = Backbone.Model.extend({
    defaults: {
        name : "",
        age : 0
    },
    validate: function(attrs) {
        if (attrs.age < 0)
            return 'Age must be 0 or greater.';
    }
});

//Nested Collections

var Note = Backbone.Model.extend({});

var Notes = Backbone.Collection.extend({
    model: Note,
    initialize: function (models, options){
        this.doc = options.doc;
    },
    url: function() {
        return this.doc.url + '/notes'; // ex: /documents/2/notes
    }
});

var Document = Backbone.Model.extend({
    initialize: function() {
        this.notes = new Notes([], { doc : this });

    },
    addNotes = function(text) {
        this.notes.create({ text: text });
    }
});

var Documents = Backbone.Collection.extend({
    model: Document,
    initialize: function() {
        this.on('reset', this.getNotes, this);
    },
    getNotes: function() {
        this.each(function(doc){
            model.notes = new Notes([], { doc : doc });
            model.notes.fetch();
        })
    }
});