App.Models.Contact = Backbone.Model.extend({
    validate: function(attrs) {

        if ( ! attrs.first_name || ! attrs.last_name) {
            return 'First & Last Name are required.';
        }

        if ( ! attrs.email) {
            return 'Email is required.';
        }
    }
});