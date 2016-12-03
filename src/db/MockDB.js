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
	mock = [new Article('name1', 'comment1', 'https://en.wikipedia.org/wiki/Halsey_(singer)')];
}

MockDB.prototype = new MockDB();
MockDB.prototype.constructor = MockDB;

MockDB.prototype.getArticles = function() {
	return mock;
};

module.exports = MockDB;