var Person = Backbone.Model.extend({
    defaults : {
        name: 'John Doe',
        age: 25,
        occupation: 'Worker'
    },

    validate: function(attrs) {
        if (attrs.age < 0) {
            return 'Age must be positive, Silly.';
        }

        if ( ! attrs.name) {
            return 'Everyone has a name!';
        }
    },

    work: function() {
        return this.get('name') + ' is working';
    }
});

// person.on('invalid', function(model, error) {
//     console.log(error);
// });