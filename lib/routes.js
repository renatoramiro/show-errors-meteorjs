Router.configure({
	layoutTemplate: 'layout',
	waitOn: function () { return Meteor.subscribe('books'); }
});

Router.map(function () {
	this.route('booksList', {
		path: '/',
	});

	this.route('insertBook', {
		path: '/book/new'
	});

	this.route('login', {
		path: 'login',
		waitOn: function () {
			Errors.clearSeen();
		}
	});
	this.route('register', {
		path: 'register', 
		waitOn: function () {
			Errors.clearSeen();
		}
	});
	this.route('logout', {
		path: '/logout',
		layoutTemplate: 'layout'
	});
});