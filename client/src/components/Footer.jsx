import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './../views/HomePage.scss';

class Footer extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.onSignOutTrigger = this.onSignOutTrigger.bind(this);
	// }
	render() {
		const user = this.props.user;
		return (
			<nav>
				<Fragment>
					<div className="footer">
						<h2>Welcome To Your Local Thrift Community</h2>
					</div>
				</Fragment>
			</nav>
		);
	}
}

export default Footer;
