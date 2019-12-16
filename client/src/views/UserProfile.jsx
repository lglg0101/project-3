import React, { Component } from 'react';

import PostListView from './postView/PList';
import ReviewListView from './reviewsView/RList';
import { Link } from 'react-router-dom';

import { loadUserInformation } from './../services/authentication.js';
import { list as listReviewService } from './../services/reviews.js';

export default class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		};
	}

	async componentDidMount() {
		try {
			const reviews = await listReviewService();
			console.log(reviews);
			console.log('USER', this.props.user._id);

			this.setState({
				reviews
			});
		} catch (error) {
			console.log(error);
		}
	}
	// async componentDidMount() {
	// 	console.log(this.props);
	// 	try {
	// 		// const reviews = await loadReviewInformation();
	// 		const reviews = await listReviewService();

	// 		this.setState({
	// 			// user: this.props.user,
	// 			reviews
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// 	console.log('THIS IS THE REVIEW', this.state.reviews);
	// }

	render() {
		const user = this.props.user;

		// const reviews = this.state.reviews;
		// const filteredArray = this.state.reviews.filter(
		// 	review => review._author._id === user._id
		// );
		// console.log(user.image);

		return (
			<div>
				<h1>YOUR PROFILE</h1>
				{user && (
					<div>
						<p>{user.username}</p>
						<p>{user.email}</p>
						<p>{user.username}</p>
						<img src={user.image} />

						{user.isShop && <h1>THIS IS ONLY FOR SHOPS!</h1>}
						<ReviewListView />
					</div>
				)}
			</div>
		);
	}
}
