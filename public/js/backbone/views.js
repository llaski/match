//Global App View
App.Views.App = Backbone.View.extend({
    initialize: function() {
        vent.on('contact:edit', this.editContact, this);
        var addContactView = new App.Views.addContact( { collection: App.contacts } );

        var allContactsView = new App.Views.Contacts({ collection: App.contacts }).render();

        $("#allContacts").append(allContactsView.el);
    },

    editContact: function(contact) {
        var editContactView = new App.Views.editContact({ model : contact });
        $("#editContactSection").html(editContactView.el);
    }
});

//Add Contact View
App.Views.addContact = Backbone.View.extend({
    el: "#addContact",
    events: {
        'submit' : 'addContact'
    },

    initialize: function() {
        this.first_name = $("#first_name");
        this.last_name = $("#last_name");
        this.email = $("#email");
        this.description = $("#description");
    },

    addContact: function(evt) {
        evt.preventDefault();

        this.collection.create({
            first_name : this.first_name.val(),
            last_name : this.last_name.val(),
            email : this.email.val(),
            description : this.description.val()
        }, { validate: true, wait: true });

        this.clearForm();
    },

    clearForm: function() {
        this.first_name.val('');
        this.last_name.val('');
        this.email.val('');
        this.description.val('');
    }
});

//Edit Contact
App.Views.editContact = Backbone.View.extend({

    template: template('editContactTemplate'),

    initialize: function() {
        this.render();

        this.form = this.$('form');
        this.first_name = this.form.find("#edit_first_name");
        this.last_name = this.form.find("#edit_last_name");
        this.email = this.form.find("#edit_email");
        this.description = this.form.find("#edit_description");
    },

    events: {
        "submit form" : 'submit',
        "click button.cancel" : 'cancel'
    },

    submit: function(evt) {
        evt.preventDefault();

        //Get related model
        //Update attributes
        this.model.save({
            first_name : this.first_name.val(),
            last_name : this.last_name.val(),
            email : this.email.val(),
            description : this.description.val()
        });

        this.remove();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    cancel : function () {
        this.remove();
    }

});

//All Contacts
App.Views.Contacts = Backbone.View.extend({
    tagName: 'tbody',

    initialize: function() {
        this.collection.on('add', this.addOne, this); //sync = adding or editing
        this.collection.on('reset', this.render, this);
    },

    render: function() {
        this.collection.each( this.addOne, this);
        return this;
    },

    addOne: function(contact) {
        var contactView = new App.Views.Contact({ model: contact });
        this.$el.append(contactView.render().el);
    }
});

App.Views.Contact = Backbone.View.extend({
    tagName: 'tr',
    template: template('allContactsTemplate'),

    initialize: function() {
        this.model.on('destroy', this.unrender, this);
        this.model.on('change', this.render, this);
    },

    events: {
        'click a.delete' : 'destroy',
        'click a.edit' : 'edit'
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

    destroy: function() {
        this.model.destroy();
    },

    unrender: function() {
        this.remove(); //this.$el.remove()
    },

    edit: function() {
        vent.trigger('contact:edit', this.model);
    }
});

