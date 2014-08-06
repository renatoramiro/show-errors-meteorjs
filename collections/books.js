Books = new Meteor.Collection('books');

var Schemas = {};

Schemas.Book = new SimpleSchema({
	title: {
		type: String
	},

	author: {
		type: String,
		optional: true
	}
});

Books.attachSchema(Schemas.Book);