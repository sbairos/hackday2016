import React from 'react';
import Article from './obj/Article'
var MockDB = require('./db/MockDB');

var db = new MockDB();
// console.log(db.getArticles(localStorage.get('username')));
class ReadQueue extends React.Component {
  constructor() {
    super();
    this.username = '';
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    this.rq = db.getArticles(this.username);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(event) {
    console.log(event.target);
    var i =0;
    for (i = 0; i < this.rq.length && event.target.id != this.rq[i].name; i++) {}

    this.rq.splice(i, 1);
  }

  render() {
    var onRemove = this.onRemove
    return (
      <ol>
        {this.rq.map(function(article){
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