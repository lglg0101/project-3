import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { list as listPostService } from './../../services/posts';
import './Posts.css';

class PostListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	// async componentDidMount() {
	//   try {
	//     const posts = await listPostService();
	//     this.setState({
	//       posts
	//     });
	//   } catch (error) {
	//     console.log(error);
	//   }
	//   console.log(this.state.posts);
	// }
	render() {
		return (
			<main className = "postListContainer">
				{this.props.posts.map(post => (
					<Link  
					className="postLink" 
					key={post._id} 
					to={`/post/${post._id}`}>
					
					<p className="postP">Posted By: {post._author.username}</p>
						<h1 className="postH1">{post.text}</h1>
						<img className="postImg" src={post.image} alt="" />
					</Link>
				))}
			</main>
		);
	}
}
export default PostListView;
