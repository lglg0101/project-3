import React, { Component, Fragment } from 'react';
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
		console.log(this.props.reviews);
		return (
			<Fragment>
				<main className="reviewListContainer">
					{this.props.reviews.map(review => (
						<Fragment>
							<Link
								className="linkReview"
								key={review._id}
								to={`/review/${review._id}`}
							>
								<p className="reviewP">
									{' '}
									Shop Reviewed: {review._shop.shopName}
								</p>
								<h2 className="reviewP">
									Reviewed By: {review._author.username}
								</h2>
								<h1 className="reviewH1">"{review.text}"</h1>
								<img className="reviewImg" src={review.image} alt="" />
								<h2 className="createdBy">Created At: {review.createdAt}</h2>
							</Link>
						</Fragment>
					))}
				</main>
			</Fragment>
		);
	}
}

export default ReviewListView;
