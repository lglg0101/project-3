import React, { Component } from "react";
import { Link } from "react-router-dom";

import { list as listPostService } from "./../../services/posts";

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
      <main>
        {this.props.posts.map(post => (
          <Link key={post._id} to={`/post/${post._id}`}>
             <h1>{post.text}</h1>
            <img src={post.image} alt="" />
            <p>{post._author.username}</p>
          </Link>
        ))}
      </main>
    );
  }
}

export default PostListView;
