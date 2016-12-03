import React from 'react';
import Article from './obj/Article'
var MockDB = require('./db/MockDB');

var db = new MockDB();
console.log(db.getArticles());
class ReadQueue extends React.Component {
    constructor() {
        super();
        this.rq = db.getArticles();
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