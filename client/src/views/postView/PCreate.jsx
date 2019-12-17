import React, { Component } from 'react';
import './Posts.css';
import { create as createPostService } from './../../services/posts';

class PostCreateView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {
				text: '',
				_author: '',
				image: null
			}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmission = this.handleFormSubmission.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		//console.log(this.props);
	}
	handleInputChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		// console.log(name, value);
		this.setState({
			// [name]: value
			post: {
				...this.state.post,
				[name]: value
			}
		});
		/*
    this.setState(previousState => ({
      note: {
        ...previousState.note,
        [name]: value
      }
    }));
    */
	}
	// async handleFormSubmission(event) {
	//   event.preventDefault();
	//   const note = this.state.note;
	//   console.log(note);
	//   try {
	//     const noteDocument = await createNoteService(note);
	//     const id = noteDocument._id;
	//     this.props.history.push(`/${id}`);
	//   } catch (error) {
	//     console.log(error);
	//   }
	// }
	handleFormSubmission(event) {
		event.preventDefault();
		const post = this.state.post;
		createPostService(post)
			// .then(newPost => this.props.history.push(`/post/list`))
			.catch(error => console.log(error));
	}
	
	handleFileChange(event) {
		//console.dir(event.target.files);
		const file = event.target.files[0];
		this.setState({
			post: {
				...this.state.post,
				image: file
			}
		});
	}
	
	render() {
		const post = this.state.post;
		return (
			<main>
				{post && (
					<form onSubmit={this.handleFormSubmission}>
						<textarea
							placeholder="Content"
							value={post.content || ''}
							name="content"
							onChange={this.handleInputChange}
						></textarea>
						<input type="file" name="image" onChange={this.handleFileChange} />
						<button>Create Post</button>
					</form>
				)}
			</main>
		);
	}
}
export default PostCreateView;
