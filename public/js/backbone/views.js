//Global App View
App.Views.App = Backbone.View.extend({
    initialize: function() {
        var addContactView = new App.Views.addContact( { collection: App.contacts } );
    }
});

//Add Contact View
App.Views.addContact = Backbone.View.extend({
    el: "#addContact",
    events: {
        'submit' : 'addContact'
    },

    addContact: function(evt) {
        evt.preventDefault();

        this.collection.create({
            first_name : this.$('#first_name').val(),
            last_name : this.$('#last_name').val(),
            email : this.$('#email').val(),
            description : this.$('#description').val()
        }, { validate: true, wait: true });

        console.log(this.collection);
    }
});