import React, { Component } from 'react';
import { loadShopInformation } from './../services/authentication';
import ReviewCreateView from './reviewsView/RCreate';
import ReviewListView from './reviewsView/RList';
import PostCreateView from './postView/PCreate';

export default class ShopProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shop: null
		};
	}

	render() {
		const shop = this.state.shop;
		return (
			// user &&
			<div>
				<h1>THIS IS THE SHOP PROFILE</h1>
				<PostCreateView />>
				<ReviewCreateView />
				<ReviewListView />
			</div>
		);
	}
}
