import React, { Component, Link } from 'react';
import MapSingle from './../components/MapSingle';
import { loadMyShop } from './../services/shops.js';
import Navbar from './../components/Navbar';
import PostCreateView from './../views/postView/PCreate';
import ReviewListView from './../views/reviewsView/RList';

export default class SingleStoreView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			posts: [],
			shop: null
		};
	}
	async componentDidMount() {
		try {
			const shop = await loadMyShop();
			// const reviews = await listReviewService();
			// const posts = await listPostService();
			// console.log("SHOPS AFTER SERVICE", shop);
			// console.log("USER", this.props.user._id);
			this.setState({
				shop: shop
			});
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		console.log(this.props);
		const user = this.props.user;
		const shop = this.state.shop;
		console.log(shop);

		return (
			<div>
				<div className="navBar">
					<Navbar user={this.props.user} />
				</div>
				<h1>THE IS SOMETHING HERE</h1>

				{/* {!this.state.shop && (
          <pre>{JSON.stringify(this.state.shop, 2, null)}</pre>
        )} */}
				<div className="profileContainer">
					<MapSingle />
					{shop && (
						<div>
							<div>
								<h1 className="title">{shop.shopName}</h1>
								<div>
									<div className="shopLink">
										{' '}
										{user && user.isShop && (
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
									<img src={shop.image} />
									<div className="shopInfo">
										<h1>SHOP INFORMATION</h1>
										<p className="shopInfotext">
											Telephone Number: {shop.telephone}
										</p>
										<p className="shopInfotext">
											Working Hours: {shop.workingHours}
										</p>
										<p className="shopInfotext">Address: {shop.shopAdress}</p>
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
			</div>
		);
	}
}
