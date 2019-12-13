import React, { Component } from "react";
import PostCreateView from "./postView/PCreate";
import PostSingleView from "./postView/PSingle";
import PostListView from "./postView/PList";
import { list as listPostService } from "./../services/posts";

export class CommunityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {
      const posts = await listPostService();
      this.setState({
        posts
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.fetchData();
  }


  async componentDidUpdate(prevProps, prevState) {
    if (this.prevState !== this.state.posts) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div>
        <h1>Message Board</h1>
        <PostCreateView />
        <PostListView posts={this.state.posts} />
      </div>
    );
  }
}

export default CommunityView;
