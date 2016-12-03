import Article from '../obj/Article'
// var dblist = []
// var initialize = function() {
// 	dblist = [new Article('name1', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)')];
// }

// module.exports = {
// 	var mock = [];
// 	init: function() {
// 		// var mock = [];
// 		mock.push(new Article('name1', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'));
// 	}

// }
var mock;

function MockDB() {
	mock = [new Article('name1', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name2', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name3', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name4', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name5', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name6', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name7', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name8', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name9', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name10', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name11', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name12', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name13', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name14', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name15', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name16', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name17', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name18', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	new Article('name19', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)'),
	];
}

MockDB.prototype = new MockDB();
MockDB.prototype.constructor = MockDB;

MockDB.prototype.getArticles = function() {
	return mock;
};

module.exports = MockDB;