var filters = {
	isLoggedIn: function (pause) {
		if(!(Meteor.loggingIn() || Meteor.user())){
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