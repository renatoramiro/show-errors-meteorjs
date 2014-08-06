Books = new Meteor.Collection('books');

var Schemas = {};

Schemas.Book = new SimpleSchema({
	title: {
		type: String
	},

	author: {
		type: String
	}
});

Books.attachSchema(Schemas.Book);