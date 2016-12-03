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
    }

    render() {

        return (
            // <div className='hi'> hello
            // </div>
            <ol>
                {this.rq.map(function(article){
                    return <li key={article.name}><a href={article.url}>{article.name}</a></li>;
                })}
            </ol>
            );
    }
}
export default ReadQueue