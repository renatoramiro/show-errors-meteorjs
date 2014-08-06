Template.booksList.books = function () {
	if (Meteor.userId()) {
		return Books.find({author: Meteor.user().profile.completeName});
	} else{
		return Books.find();
	}
};

Template.booksList.authorName = function () {
	return Meteor.users.findOne({_id: this.author });
}

Template.insertBook.events({
	'submit #insertBook': function (e, t) {
		e.preventDefault();
		var title = t.find('#title').value;

		data = {title: title, author: Meteor.user().profile.completeName };
		Books.insert(data, function (error, result) {
			if (error) {
				Errors.throw(error.message);
				console.log(Books.simpleSchema().namedContext().invalidKeys());
				Errors.clearSeen();
			} else{
				Router.go('booksList');
			}
		});
	}
});