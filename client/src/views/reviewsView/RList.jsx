import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

import { list as listReviewService } from './../../services/reviews';

class ReviewListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		};
	}
	async componentDidMount() {
		try {
			const reviews = await listReviewService();
			this.setState({
				reviews
			});
		} catch (error) {
			console.log(error);
		}
		console.log(this.state.reviews);
	}

	render() {
		console.log('REVIEWS ON PROPS REVIEW LIST', this.props.reviews);
		return (
			<main>
				{this.state.reviews.map(review => (
					<Link key={review._id} to={`/review/${review._id}`}>
						<h1>{review.text}</h1>
						<img src={review.image} alt="" />
						{/* <p>{review._author.username}</p> */}
					</Link>
				))}
			</main>
		);
	}
}

export default ReviewListView;
