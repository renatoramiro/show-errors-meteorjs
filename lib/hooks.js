var filters = {
	isLoggedIn: function (pause) {
		if(!(Meteor.loggingIn() || Meteor.user())){
			// throw new Meteor.Error(403, "Not authorized to create new users");
			Errors.throw('Acesso não autorizado');
			this.render('login');
			pause();
		}
	},

	clearSeenErrors: function (pause) {
		Errors.clearSeen();
	}
};

Router.onBeforeAction(filters.clearSeenErrors);
Router.onBeforeAction(filters.isLoggedIn, {only: ['insertBook']});