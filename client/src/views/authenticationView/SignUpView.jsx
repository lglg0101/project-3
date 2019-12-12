import React, { Component } from 'react';

import { signUp as signUpService } from './../../services/authentication';

class AuthenticationSignUpView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			city: '',
			// coordinates, '',
			// bio, '',
			// telephone: '',
			role: '',
			image: '',
			password: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmission = this.handleFormSubmission.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	async handleFormSubmission(event) {
		event.preventDefault();
		const { username, email, city, role, image, password } = this.state;

		try {
			const user = await signUpService({
				username,
				email,
				city,
				role,
				image,
				password
			});
			this.props.changeAuthenticationStatus(user);
			this.props.history.push(`/private`);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main>
				<form onSubmit={this.handleFormSubmission}>
					<input
						type="text"
						placeholder="Username"
						value={this.state.username}
						name="username"
						onChange={this.handleInputChange}
					/>
					<input
						type="email"
						placeholder="Email"
						value={this.state.email}
						name="email"
						onChange={this.handleInputChange}
					/>
					<input
						type="city"
						placeholder="City"
						value={this.state.city}
						name="city"
						onChange={this.handleInputChange}
					/>
					<input
						type="checkbox"
						placeholder="User"
						checked={this.state.isUser}
						name="isUser"
						onChange={this.handleInputChange}
					/>
					<input
						type="password"
						placeholder="Password"
						value={this.state.password}
						name="password"
						onChange={this.handleInputChange}
					/>
					<input
						type="file"
						placeholder="Add Picture"
						value={this.state.picture}
						name="picture"
						onChange={this.handleInputChange}
					/>

					<button>Sign Up</button>
				</form>
			</main>
		);
	}
}

export default AuthenticationSignUpView;
