import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { load as loadPostService } from './../services/posts';

class PostSingleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: null
		};
	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		try {
			const post = await loadPostService(id);
			this.setState({
				post
			});
		} catch (error) {
			console.log(error);
			this.props.history.push('/error/404');
		}
	}

	render() {
		const post = this.state.post;
		const id = this.props.match.params.id;
		return (
			<main>
				{post && (
					<div>
						<img src={post.image} />
						<p>{post.content}</p>
						<Link to={`/${id}/edit`}>Edit Post</Link>
					</div>
				)}
			</main>
		);
	}
}

export default PostSingleView;
