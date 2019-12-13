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
  async componentDidMount() {
    try {
      const posts = await listPostService();
      console.log(posts);
      this.setState({
        posts
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main>
        {this.state.posts.map(post => (
          <Link key={post._id} to={`/${post._id}`}>
            {(post.text && <h1>{post.text}</h1>) || <h5>Post not found</h5>}
          </Link>
        ))}
      </main>
    );
  }
}

export default PostListView;
