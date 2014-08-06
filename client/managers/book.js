Template.booksList.books = function () {
	return Books.find();
};

Template.insertBook.events({
	'submit #insertBook': function (e, t) {
		e.preventDefault();
		var title = t.find('#title').value
		, author  = t.find('#author').value;

		data = {title: title, author: author};
		Books.insert(data, function (error, result) {
			if (error) {
				Errors.throw(error.message);
				console.log(Books.simpleSchema().namedContext().invalidKeys());
				Errors.clearSeen();
			} else{
				Router.go('booksList');
			}
		})
	}
});