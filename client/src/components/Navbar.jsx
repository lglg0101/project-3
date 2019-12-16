import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { signOut as signOutService } from './../services/authentication';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.onSignOutTrigger = this.onSignOutTrigger.bind(this);
	}

	async onSignOutTrigger() {
		try {
			await signOutService();
			this.props.changeAuthenticationStatus(null);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const user = this.props.user;
		return (
			<nav>
				<Fragment>
					<Link to="/sign-in">Sign In</Link> |{' '}
					<Link to="/sign-up">Sign Up</Link> |{' '}
					<Link to="/community">Community</Link>
					<Link to="/userprofile">Profile Page </Link>
					{user && <Link to="/sign-out">Profile Page </Link>}
				</Fragment>
			</nav>
		);
	}
}

export default Navbar;
