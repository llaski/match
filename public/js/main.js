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

var PersonView = Backbone.View.extend({
	tagName: 'li',
	// className: 'person',
	// id: 'some-person',
	// 
	template: _.template($("#personTemplate").html()),
	// template: "#personTemplate",

	initialize: function() {
		this.render();
	},

	render: function() {
		// var template = _.template($(this.template));
		this.$el.html(this.template(this.model.toJSON()));
	}
});

//List of people
var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

var person = new Person;
var person2 = new Person({ name: 'Larry', age: '25'});
var personView = new PersonView({ model: person });
var peopleCollection = new PeopleCollection([
	{ name: 'Larry', age: '25'},
	{ name: 'Joe', age: '26'},
	{ name: 'Megan', age: '27'},
	{ name: 'Dani', age: '28'}
]);
