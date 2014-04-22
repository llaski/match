App.Collections.Contacts = Backbone.Collection.extend({
    model: App.Models.Contact,
    url: 'backbone/contacts',
    comparator: function(contactA, contactB) {
        if (contactA.get('last_name') > contactB.get('last_name')) return -1; // before
        if (contactB.get('last_name') > contactA.get('last_name')) return 1; // after
        return 0; // equal
    }
});