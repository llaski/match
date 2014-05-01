//Validation
/*var User = Backbone.Model.extend({
    defaults: {
        name : "",
        age : 0
    },
    validate: function(attrs) {
        if (attrs.age < 0)
            return 'Age must be 0 or greater.';
    }
});*/
String.prototype.wordCount = function() {
    var count = 0;
    for (var i = 0; i <= this.length; i++) {
        if (this.charAt(i) == " ") {
            count++;
        }
    }

    return count;
};

//Nested Collections

var NoteModel = Backbone.Model.extend({});

var NotesCollection = Backbone.Collection.extend({
    model: NoteModel,
    initialize: function (models, options){
        this.doc = options.doc;
    },
    url: function() {
        return this.doc.url() + '/notes'; // ex: /documents/2/notes
    },


    // parse : function(response) {
    //     return response.item;
    // },

    // toJSON : function() {
    //     return {
    //         item : this.attributes
    //     };
    // }
});

var DocumentModel = Backbone.Model.extend({
    initialize: function() {
        this.notes = new NotesCollection([], { doc : this });
    },

    addNotes : function(text) {
        this.notes.create({ text: text });
    }
});

var DocumentsCollection = Backbone.Collection.extend({
    model: DocumentModel,
    url : '/advanced-backbone/documents',

    initialize: function() {
        this.on('reset', this.handleReset, this);
    },

    handleReset: function() {
        this.addCounts();
        this.getNotes();
    },

    addCounts: function() {
        this.each(function(doc){
            doc.set('characters', doc.get('text').length);
            doc.set('words', doc.get('text').wordCount());
        });
    },


    getNotes: function() {
        this.each(function(doc){

            doc.notes = new NotesCollection([], { doc : doc });
            doc.notes.fetch();
        })
    },

    //Sorting
    // comparator : function(model) {
    //     return model.get('text');
    // },

    comparator : function(a, b) {
        return a.get('id') - b.get('id');
        // var id = a.get('id') - b.get('id');
        // if (id === 0) return a.get('text') < b.get('text') ? -1 : 1;
        // else
        //     return id;
    },

    update: function() {
        this.fetch({
            add: true
        });
    }
});

var DocumentView = Backbone.View.extend({
    // tagName: 'li',
    template : Templates.Document,

    render: function() {
        // this.el.innerHTML = this.model.get('text');
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var DocumentsView = Backbone.View.extend({
    tagName: 'ul',
    template : Templates.Documents,
    initialize: function() {
        this.collection.on('reset', this.render, this);
        this.collection.on('add', this.addUpdate, this);

        this.collection.fetch({ reset: true });
        // setInterval(_.bind(this.collection.update, this.collection), 3000);
    },

    render: function() {

        this.$el.html(this.template({ length : this.collection.length }));

        this.collection.each( this.addUpdate, this);

        return this;
    },

    addUpdate: function(model) {
        this.$el.append(new DocumentView({ model : model }).render().el);
    }
});

// var documents = new DocumentsView();

// var documentsView = new DocumentsView({ collection : new DocumentsCollection });
// $("#main").append(documentsView.render().el);


// ds = new DocumentsCollection();
// ds.fetch({ reset : true});
$(function(){
    //Template Helper Functions
    var template = function (templateString) {
        var templateFn = _.template(templateString);
        return function (context) {
            return templateFn(_.extend({}, template.fn, context));
        }
    };

    template.fn = {};
    template.fn.twitterLink = function(handle) {
        return '<a href="http://twitter.com/' + handle + '">@' + handle + '</a>';
    };


    var PersonModel = Backbone.Model.extend({});
    var PersonView = Backbone.View.extend({
        // template : _.template($("#personView").html()),
        template : template($("#personView").html()),
        render : function() {
            // this.el.innerHTML = this.template({ person : this.model.toJSON(), twitterLink : this.twitterLink});
            this.el.innerHTML = this.template({ person : this.model.toJSON()});
            return this;
        }//,
        //helper function
        // twitterLink : function(handle) {
        //     return '<a href="http://twitter.com/' + handle + '">@' + handle + '</a>';
        // }
    });

     var PeopleCollection = Backbone.Collection.extend({
        model: PersonModel
    });

    var PeopleView = Backbone.View.extend({
        template : _.template($("#peopleView").html()),
        render: function() {
            this.el.innerHTML = this.template();
            this.collection.each(function(model){
                this.$el.append(new PersonView({ model : model}).render().el);
            }, this);
            return this;
        }
    });

    // var people = new PeopleCollection();
    // people.add({ name : 'LL', age : 25, twitter : 'john_doe' });
    // people.add({ name : 'AA', age : 26, twitter : 'llaski' });
    // people.add({ name : 'BB', age : 27, twitter : 'fitness' });

    // var personView = new PersonView({ model : person });
    // $("#main").append(new PeopleView({ collection : people }).render().el);
    //
    var User = Backbone.Model.extend({});
    var ShowUserView = Backbone.View.extend({
        template : template($("#showUserView").html()),
        initialize: function() {
            this.model.on('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var EditUserView = Backbone.View.extend({
        template : template($("#editUserView").html()),
        events : {
            "click button" : "saveChanges"
        },
        initialize: function() {
            this.model.on('change', this.render, this);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        saveChanges : function() {
            this.model.set({
                name : $("#name").val(),
                twitter : $("#twitter").val()
            });
        }
    });

    // window.me = new User({ name : "LL", twitter : "fitwebdev" });
    // var showView = new ShowUserView({ model :  window.me });
    // var editView = new EditUserView({ model :  window.me });

    // $("#main").append(showView.render().el).append(editView.render().el);



    var UI = {};
    UI.Person = Backbone.Model.extend({});
    UI.People = Backbone.Collection.extend({});
    var Genders = new Backbone.Collection([{ name : 'Female', id : 1}, { name : "Male", id : 0}]);
    var people = new UI.People;

    people.add({ name : "L Train", gender : Genders.get(0), birthday: new Date(1990, 5, 15), married: false });
    people.add({ name : "A Train", gender : Genders.get(1), birthday: new Date(1991, 5, 15), married: false });
    people.add({ name : "B Train", gender : Genders.get(0), birthday: new Date(1992, 5, 15), married: false });
    people.add({ name : "C Train", gender : Genders.get(1), birthday: new Date(1993, 5, 15), married: false });
    people.add({ name : "F Train", gender : Genders.get(0), birthday: new Date(1994, 5, 15), married: false });



    var table = new Backbone.UI.TableView({
        collection: people,
            columns : [
                { title : 'Name', content : 'name' },
                { title : 'Gender', content : 'gender' },
                { title : 'Birthday', content : 'birthday' },
                { title : 'Married', content : 'married' }
            ]
    });

    console.log(table);
    var AppView = Backbone.View.extend({
        el : '#main',

        render: function() {
            this.$el.append(table.render().el);
        }
    });

    new AppView().render();
});