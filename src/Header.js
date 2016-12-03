import React from 'react';
import {Navbar} from 'react-bootstrap';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      // count: 0,
      signedIn: false,
      username: null,
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
					<h3>{this.state.username}s</h3>
				</div>
			</div>
		</nav>
    );
  }
}
export default Header;