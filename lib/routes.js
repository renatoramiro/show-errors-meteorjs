Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	this.route('booksList', {
		path: '/',
	});

	this.route('insertBook', {path: '/book/new'});
})