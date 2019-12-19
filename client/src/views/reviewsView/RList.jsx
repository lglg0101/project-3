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
	// async componentDidMount() {
	// 	try {
	// 		const reviews = await listReviewService();
	// 		this.setState({
	// 			reviews
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// 	console.log(this.state.reviews);
	// }

	render() {
		return (
			<main className="reviewListContainer">
				{this.props.reviews.map(review => (
					<Link
						className="linkReview"
						key={review._id}
						to={`/review/${review._id}`}
					>
						<p className="reviewP">Shop Reviewed: {review._shop}</p>
						<p className="reviewP">Reviewed By: {review._author.username}</p>
						<h1 className="reviewH1">"{review.text}"</h1>
						<img className="reviewImg" src={review.image} alt="" />
					</Link>
				))}
			</main>
		);
	}
}

export default ReviewListView;
