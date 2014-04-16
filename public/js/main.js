(function(){

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	App.Models.Person = Backbone.Model.extend({
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

	App.Views.Person = Backbone.View.extend({
		tagName: 'li',
		// className: 'person',
		// id: 'some-person',
		// 
		template: template('personTemplate'),
		// template: "#personTemplate",

		// initialize: function() {
		// 	this.render();
		// },

		render: function() {
			// var template = _.template($(this.template));
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	App.Views.People = Backbone.View.extend({
		tagName: 'ul',

		render: function() {
			this.collection.each(function(person){
				var personView = new PersonView({ model: person });
				this.$el.append(personView.render().el);
			}, this);

			return this;
		}
	});

	App.Collections.People = Backbone.Collection.extend({
		model: Person
	});

	window.template = function(id) {
		return _.template($('#' + id).html());
	};

	//List of people

	var person = new App.Models.Person;
	var person2 = new App.Models.Person({ name: 'Larry', age: '25'});
	var personView = new App.Views.PersonView({ model: person });
	var peopleCollection = new App.Collections.PeopleCollection([
		{ name: 'Larry', age: '25'},
		{ name: 'Joe', age: '26'},
		{ name: 'Megan', age: '27'},
		{ name: 'Dani', age: '28'}
	]);

	var peopleView = new App.



	$(function(){
		$(document.body).append(peopleView.render().el);
	});

})();





// person.on('invalid', function(model, error) {
//     console.log(error);
// });




