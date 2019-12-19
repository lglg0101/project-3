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
			<footer>
				<Fragment>
					<div className="footer">
						
						<p>Welcome To Your Local Thrift CommunityOur Mission Is To Make You Hotter And The Planet Cooler #slowfashion #thriftcommunity</p>
					</div>
				</Fragment>
			</footer>
		);
	}
}

export default Footer;
