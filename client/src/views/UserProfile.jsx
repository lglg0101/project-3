import React, { Component } from 'react';

import PostListView from './postView/PList';
import ReviewListView from './reviewsView/RList';
import ShopInfo from "./authenticationView/ShopInfo"
import { Link } from 'react-router-dom';

import { loadUserInformation } from './../services/authentication.js';
import { list as listReviewService } from './../services/reviews.js';
import { list as listPostService } from './../services/posts.js';
import Navbar from "./../components/Navbar";

import './Profile.scss';
import './../components/Navbar.scss'

export default class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			posts: []
		};
	}

	async componentDidMount() {
		try {
			const reviews = await listReviewService();
			const posts = await listPostService();

			console.log(reviews);
			console.log('USER', this.props.user._id);

			this.setState({
				reviews,
				posts
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
			<div className="profileContainer">
				{user && (
					<div>
				<div class="navBar">
        <Navbar user={this.props.user} />
         </div>
						<div>
							<h1 className="title">{user.username}'S Profile</h1>
							<div>
								<div className="shopLink">
									{' '}
									{user.isShop && (
										<ShopInfo />
									
									)}
									{user.isShop && (
									
										<Link to="/shopprofile">GO TO YOUR SHOP PROFILE</Link>

									)}
								</div>
							</div>

							<div className="userInfo">
								<img
									className="profilePic"
									src="https://www.pinpng.com/pngs/m/457-4570044_3d-diamond-pixel-art-colorful-diamond-hd-png.png"
									alt=""
								/>
								<img src={user.image} />
								<h1>THIS IS WHERE THE BIO GOES</h1>
							</div>
						</div>

						<div className="contentDisplay">
							<div>
								{' '}
								<ReviewListView reviews={this.state.reviews} />
							</div>

							<div>
								{' '}
								<h1>THIS IS WHERE POSTS GO</h1>
								<PostListView posts={this.state.posts} />
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
