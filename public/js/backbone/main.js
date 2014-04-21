(function(){

	// window.App = {
	// 	Models: {},
	// 	Collections: {},
	// 	Views: {},
	// 	Router: {}
	// };

	// window.template = function(id) {
	// 	return _.template($('#' + id).html());
	// };

	// ===== First Set ===== */
	// App.Models.Person = Backbone.Model.extend({
	//     defaults : {
	//         name: 'John Doe',
	//         age: 25,
	//         occupation: 'Worker'
	//     },
	//     validate: function(attrs) {
	//         if (attrs.age < 0) {
	//             return 'Age must be positive, Silly.';
	//         }

	//         if ( ! attrs.name) {
	//             return 'Everyone has a name!';
	//         }
	//     },
	//     work: function() {
	//         return this.get('name') + ' is working';
	//     }
	// });

	// App.Collections.People = Backbone.Collection.extend({
	// 	model: App.Models.Person
	// });

	// App.Views.Person = Backbone.View.extend({
	// 	tagName: 'li',
	// 	// className: 'person',
	// 	// id: 'some-person',
	// 	//
	// 	template: template('personTemplate'),
	// 	// template: "#personTemplate",

	// 	// initialize: function() {
	// 	// 	this.render();
	// 	// },
	// 	render: function() {
	// 		// var template = _.template($(this.template));
	// 		this.$el.html(this.template(this.model.toJSON()));
	// 		return this;
	// 	}
	// });

	// App.Views.People = Backbone.View.extend({
	// 	tagName: 'ul',

	// 	render: function() {
	// 		this.collection.each(function(person){
	// 			var personView = new App.Views.Person({ model: person });
	// 			this.$el.append(personView.render().el);
	// 		}, this);

	// 		return this;
	// 	}
	// });

	// //List of people
	// // var person = new App.Models.Person;
	// // var person2 = new App.Models.Person({ name: 'Larry', age: '25'});
	// // var personView = new App.Views.PersonView({ model: person });
	// var peopleCollection = new App.Collections.People([
	// 	{ name: 'Larry', age: '25'},
	// 	{ name: 'Joe', age: '26'},
	// 	{ name: 'Megan', age: '27'},
	// 	{ name: 'Dani', age: '28'}
	// ]);

	// var peopleView = new App.Views.People({ collection: peopleCollection });

	// $(function(){
	// 	$(document.body).append(peopleView.render().el);
	// });

	// ===== Tasks ===== */
	// App.Models.Task = Backbone.Model.extend({
	// 	validate: function(attrs) {
	// 		if ( ! $.trim(attrs.title)) {
	// 			return 'Task requires a valid title';
	// 		}
	// 	}
	// });

	// App.Views.Task = Backbone.View.extend({
	// 	tagName : 'li',

	// 	template: template('taskTemplate'),

	// 	initialize: function() {
	// 		this.model.on('change', this.render, this);
	// 		this.model.on('destroy', this.remove, this);
	// 	},

	// 	events: {
	// 		'click .edit' : 'editTask',
	// 		'click .delete' : 'destroy'
	// 	},

	// 	editTask : function() {
	// 		var newTaskTitle = prompt('What would you like to change the text to?', this.model.get('title'));
	// 		this.model.set({'title': newTaskTitle}, { validate: true});
	// 	},

	// 	destroy: function() {
	// 		this.model.destroy();
	// 	},

	// 	remove: function() {
	// 		this.$el.remove();
	// 	},

	// 	render: function() {
	// 		var template = this.template(this.model.toJSON());
	// 		this.$el.html(template);
	// 		return this;
	// 	}
	// });

	// App.Views.AddTask = Backbone.View.extend({
	// 	el: "#addTask",

	// 	initialize: function() {
	// 	},

	// 	events: {
	// 		'submit' : 'submit'
	// 	},

	// 	submit: function(evt) {
	// 		evt.preventDefault();

	// 		var newTaskTitle = $(evt.currentTarget).find('input[type=text]').val();
	// 		var task = new App.Models.Task({ title: newTaskTitle });
	// 		this.collection.add(task);
	// 	}
	// });

	// App.Collections.Tasks = Backbone.Collection.extend({
	// 	model: App.Models.Task
	// });

	// App.Views.Tasks = Backbone.View.extend({
	// 	tagName: 'ul',

	// 	initialize: function() {
	// 		this.collection.on('add', this.addOne, this);
	// 	},

	// 	render: function() {
	// 		this.collection.each(this.addOne, this);
	// 		return this;
	// 	},

	// 	addOne: function(task) {
	// 		//Create new child view and append to root elem
	// 		var taskView = new App.Views.Task({ model: task });
	// 		this.$el.append(taskView.render().el);
	// 	}
	// });

	// // var task = new App.Models.Task();

	// window.tasksCollection = new App.Collections.Tasks([
	// 	{
	// 		title: 'Go to the store',
	// 		priority: 4
	// 	},
	// 	{
	// 		title: 'Go to the mall',
	// 		priority: 3
	// 	},
	// 	{
	// 		title: 'Go to the course',
	// 		priority: 5
	// 	}
	// ]);

	// var addTaskview = new App.Views.AddTask({ collection: tasksCollection });
	// var tasksView = new App.Views.Tasks({ collection: tasksCollection });

	// $('.tasks').html(tasksView.render().el);

	// // ===== Routing ===== */

	// var vent = _.extend({}, Backbone.Events);

	// App.Models.Appointment = Backbone.Model.extend({});

	// App.Views.Appointment = Backbone.View.extend({
	// 	tagName: "div",

	// 	initialize: function() {
	// 		vent.on('appointment:show', this.show, this);
	// 	},

	// 	render: function() {
	// 		this.$el.html(this.model.get('name'));
	// 		return this;
	// 	},

	// 	show: function(id) {
	// 		var appointment = this.collection.get(id);
	// 		var appointmentView = new App.Views.Appointment({ model : appointment });

	// 		$(document.body).append(appointmentView.render().el);
	// 	}
	// });

	// App.Collections.Appointments = Backbone.Collection.extend({
	// 	model: App.Models.Appointment
	// });

	// App.Router = Backbone.Router.extend({
	// 	routes: {
	// 		'' : 'index',
	// 		'show/:id' : 'show',
	// 		'download/:id/*filename' : 'download',
	// 		'search/:query' : 'search',
	// 		'appointment/:id' : 'showAppointment',
	// 		'*default' : 'default'
	// 	},

	// 	index: function() {
	// 		console.log('hola!');
	// 	},

	// 	show: function(id) {
	// 		console.log('show! + ' + id);
	// 	},

	// 	download: function(id, filename) {
	// 		console.log('download: ' + id + ' + ' + filename);
	// 	},

	// 	search: function (query) {
	// 		console.log('search by: ' + query);
	// 	},

	// 	showAppointment: function(id) {
	// 		vent.trigger('appointment:show', id);
	// 	},

	// 	default: function(other) {
	// 		alert('Not sure what you need here...accessed : ' + other);
	// 	}
	// });

	// var appointmentCollection = new App.Collections.Appointments([
	// 	{
	// 		id : '1',
	// 		name: 'Doctor'
	// 	},
	// 	{
	// 		id : '2',
	// 		name: 'Work'
	// 	}
	// ]);
	// var appointmentView = new App.Views.Appointment({ collection: appointmentCollection });

	// new App.Router;
	// Backbone.history.start();

	// // ===== Connecting with the Server ===== */
	// window.App = {
	// 	Models: {},
	// 	Views: {},
	// 	Collections: {}
	// };

	// App.Models.Task = Backbone.Model.extend({
	// 	defaults: {
	// 		title: '',
	// 		completed: 0
	// 	}//,
	// 	// urlRoot: 'tasks'
	// });

	// App.Collections.Tasks = Backbone.Collection.extend({
	// 	model: App.Models.Task,
	// 	url: 'tasks'
	// });

	// App.Views.Tasks = Backbone.View.extend({
	// 	tagName: 'ul',

	// 	initialize: function() {
	// 		this.collection.on('add', this.addOne, this);
	// 	},

	// 	render: function() {
	// 		this.$el.empty();
	// 		this.collection.each(this.addOne, this);
	// 		return this;
	// 	},

	// 	addOne: function(task) {
	// 		var task = new App.Views.Task({ model: task});
	// 		this.$el.append( task.render().el);

	// 	}
	// });

	// App.Views.Task = Backbone.View.extend({
	// 	tagName: 'li',

	// 	initialize: function() {
	// 		this.model.on('destroy', this.remove, this);
	// 	},

	// 	render: function() {
	// 		this.$el.html(this.model.get('title'));
	// 		return this;
	// 	}
	// });

	// ===== Contact Manager ===== */
	window.App = {
		Models: {},
		Views: {},
		Collections: {}
	};

	window.vent = _.extend({}, Backbone.Events);
})();

// person.on('invalid', function(model, error) {
//     console.log(error);
// });

