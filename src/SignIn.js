
import React from 'react';

// var navbarHeader = require("react-bootstrap/lib/NavbarHeader");
// var navbarBrand = require("react-bootstrap/lib/NavbarBrand");
class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
		}
		this.handleChangeU = this.handleChangeU.bind(this);
		this.handleChangeP = this.handleChangeP.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeU(event) {
		this.setState({username: event.target.value});
	}

	handleChangeP(event) {
		this.setState({password: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("save it");
		localStorage.setItem('username', this.state.username);
		location.reload();
	}

	render() {
		return (
			<form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
				<input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleChangeU} />
				<input type="text" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChangeP} />
				<input type="submit" className="btn btn-default" value = "Submit" />
			</form>
		);
	}
}
export default SignIn;