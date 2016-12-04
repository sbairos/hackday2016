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
    console.log(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeC = this.handleChangeC.bind(this);
    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: username, 
      items: rq,
      addN: '',
      addC: '',
      addU: '',
    };
  }

  handleChangeN(event) {
    this.setState({addN: event.target.value});
  }

  handleChangeC(event) {
    this.setState({addC: event.target.value});
  }

  handleChangeU(event) {
    this.setState({addU: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var list = this.state.items;
    list.push(new Article(this.state.addN, this.state.addC, this.state.addU));
    this.setState({items: list, addN:'', addC:'', addU:''});
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
    var onRemove = this.onRemove;
    var handleChangeN = this.handleChangeN;
    var handleChangeC = this.handleChangeC;
    var handleChangeU = this.handleChangeU;
    var handleSubmit = this.handleSubmit;
    return (
      <div>
        <form className="navbar-form navbar-left" onSubmit={handleSubmit}>
          <input type="text" className="form-control" placeholder="Article Name" value={this.state.addN} onChange={handleChangeN} />
          <input type="text" className="form-control" placeholder="Comment" value={this.state.addC} onChange={this.handleChangeC} />
          <input type="text" className="form-control" placeholder="URL" value={this.state.addU} onChange={this.handleChangeU} />
          <input type="submit" className="btn btn-default" value = "Submit" />
        </form>
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
      </div>
    );
  }
}
export default ReadQueue