Template.layout.events({
	'click #logout' : function (e, t) {
		Meteor.logout(function () {
			e.preventDefault();
			Router.go('booksList');
		});
	}
});