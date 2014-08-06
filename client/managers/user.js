Template.login.events({
	'submit #login-form': function (e, t) {
		e.preventDefault();
		var email  = t.find('#email').value
		, password = t.find('#password').value;

		Meteor.loginWithPassword(email, password, function (err) {
			if (err) {
				console.log(err);
				Errors.throw(err.reason);
				Errors.clearSeen();
			} else{
				Router.go('booksList');
			}
		});
		return false;
	},
});

Template.register.events({
	'submit #register-form': function (e, t) {
		e.preventDefault();
		var completeName = t.find('#name').value
		, username       = t.find('#username').value
		, email          = t.find('#email').value
		, password       = t.find('#password').value;

		data = {email: email, password: password, username: username, profile: { completeName: completeName }};
		Accounts.createUser(data, function (err) {
			if (err) {
				console.log(err.reason);
				Errors.throw(err.reason);
				Errors.clearSeen();
			} else{
				Router.go('booksList');
			}
		});
		return false;
	},
});