import React from 'react';
import Article from './obj/Article'
var MockDB = require('./db/MockDB');

var db = new MockDB();
// console.log(db.getArticles(localStorage.get('username')));
class ReadQueue extends React.Component {
  constructor() {
    super();
    var username = '';
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    var rq = db.getArticles(this.username);
    if (!rq) {
      rq = [];
    }
    this.onRemove = this.onRemove.bind(this);
    this.state = {username: username, items: rq};
  }

  onRemove(event) {
    console.log(event.target);
    var i =0;
    var items = this.state.items;
    for (i = 0; i < items.length && event.target.id != items[i].name; i++) {}

    items.splice(i, 1);
    this.setState({items: items});
  }

  render() {
    var onRemove = this.onRemove
    return (
      <ol>
        {this.state.items.map(function(article){
          return (
            <li key={article.name}>
              <a href={article.url}>{article.name}</a> - {article.comment}
              <button id={article.name} className='glyphicon glyphicon-remove' onClick={onRemove}></button>
            </li>
          );
        })}
      </ol>
      );
  }
}
export default ReadQueue