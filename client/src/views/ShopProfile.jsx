import React, { Component, Fragment } from 'react';

import PostListView from './postView/PList';
import PostCreateView from './postView/PCreate';
import ReviewListView from './reviewsView/RList';
import { Link } from 'react-router-dom';

import { loadUserInformation } from './../services/authentication.js';
import { list as listReviewService } from './../services/reviews.js';
import { list as listPostService } from './../services/posts.js';

import Navbar from './../components/Navbar';

export default class ShopProfile extends Component {
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
	render() {
		const user = this.props.user;

		return (
			<Fragment>
				<div class="navBar">
					<Navbar user={this.props.user} />
				</div>

				<div className="profileContainer">
					{user && (
						<div>
							<div>
								<h1 className="title">{user.shopName}</h1>
								<div>
									<div className="shopLink">
										{' '}
										{user.isShop && (
											<Link to="/userprofile">GO TO YOUR USER PROFILE</Link>
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
									<div className="shopInfo">
										<h1>SHOP INFORMATION</h1>
										<p className="shopInfotext">
											Telephone Number: {user.telephone}
										</p>
										<p className="shopInfotext">
											Working Hours: {user.workingHours}
										</p>
										<p className="shopInfotext">Address: {user.shopAdress}</p>
									</div>
								</div>
							</div>

							<div>{user.isShop && <PostCreateView />}</div>

							<div className="contentDisplay">
								<div>
									{' '}
									<ReviewListView />
								</div>

								<div>
									{' '}
									<h1>THIS IS WHERE POSTS GO</h1>
								</div>
							</div>
						</div>
					)}
				</div>
			</Fragment>
		);
	}
}
