import React from 'react';
import './Login.css';
import avatar from '../assets/sharkvatar.png'

class Login extends React.Component {
	constructor(props) {
			super(props);
			this.state = {value: ''};

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('A passeword was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render () {
		return (
			<div className="login">
				<img src={avatar} className="login-avatar" alt="avatar" />
				<form onSubmit={this.handleSubmit} className="login-form">
					<input value={this.state.passwordValue} onChange={this.handleChange} className="login-input" type="password" />
				</form>
			</div>
		);

	}
}

export default Login;
