import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

import { load as loadReviewService } from './../../services/reviews';

class ReviewSingleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: null
		};
	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		console.log(id);
		try {
			const review = await loadReviewService(id);
			this.setState({
				review
			});
		} catch (error) {
			console.log(error);
			// this.props.history.push("/error/404");
		}
	}

	render() {
		const review = this.state.review;
		const id = this.props.match.params.id;
		return (
			<main>
				{review && (
					<div>
						<p>{review.text}</p>
						<img src={review.text} alt=""/>
					<Link to={`/stores/${review._shop}`}>Link to the Store</Link>
						<Link to={`/${id}/edit`}>Edit Review</Link>
					</div>
				)}
			</main>
		);
	}
}

export default ReviewSingleView;
