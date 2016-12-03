import React from 'react';
import {Navbar, NavItem} from 'react-bootstrap';

// var navbarHeader = require("react-bootstrap/lib/NavbarHeader");
// var navbarBrand = require("react-bootstrap/lib/NavbarBrand");
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      // count: 0,
      signedIn: false,
      username: '',
    };
    if (localStorage && localStorage.username) {
    	this.state.signedIn = true;
    	this.state.username = localStorage.username;
    }
  }
 
  render() {
    return (
	    <nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						{this.state.username.length > 0 && 
						<a className="navbar-brand">Welcome, {this.state.username}</a>}
						{this.state.username.length == 0 &&
						<a className="navbar-brand">Welcome, stranger. Perhaps you should sign in?</a>}
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{this.state.username.length == 0 &&
						<div id="mount3"/>}
						<ul className="nav navbar-nav">
							<li><a href="">Linkerino</a></li>
						</ul>
					</div>
				</div>
			</nav>
    );
  }
}
export default Header;