import React, { Component } from 'react';
import './auth.scss';
import { signUp as signUpService } from './../../services/authentication';

class AuthenticationSignUpView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			city: '',
			coordinates: '',
			image: '',
			password: '',
			isShop: false,
			};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmission = this.handleFormSubmission.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleFileChange(event) {
		//console.dir(event.target.files);
		const file = event.target.files[0];
		this.setState({
			user: {
				...this.state.user,
				image: file
			}
		});
	}

	async handleFormSubmission(event) {
		event.preventDefault();
		const {
			username,
			email,
			city,
			isShop,
			image,
			password,
			} = this.state;
		console.log(this.state);
		try {
			const user = await signUpService({
				username,
				email,
				city,
				isShop,
				image,
				password
			
			});
			this.props.changeAuthenticationStatus(user);
			this.props.history.push(`/userprofile`)
		} catch (error) {
			console.log(error);
		}
	}


	render() {
		return (
			<div className="SignUp">
				<div className="SignUpFormDiv">
					<form className="SignUpForm" onSubmit={this.handleFormSubmission}>
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
							type="password"
							placeholder="Password"
							value={this.state.password}
							name="password"
							onChange={this.handleInputChange}
						/>
						<input
							type="city"
							placeholder="City"
							value={this.state.city}
							name="city"
							onChange={this.handleInputChange}
						/>
						<label>Add a profile picture!</label>
						<input
							type="file"
							placeholder="Add Picture"
							value={this.state.image}
							name="image"
							onChange={this.handleFileChange}
						/>
						<label>Check Box To Register As A Shop Owner</label>
						<input
							className="checkbox"
							type="checkbox"
							onChange={this.handleInputChange}
							checked={this.state.isShop}
							name="isShop"
						/>
						<button className="signUpBtn">Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AuthenticationSignUpView;
