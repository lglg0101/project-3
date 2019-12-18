import React, { Component } from "react";
import "./Community.css";
import "./../components/Navbar.scss";

import PostCreateView from "./postView/PCreate";
import PostSingleView from "./postView/PSingle";
import PostListView from "./postView/PList";
import { list as listPostService } from "./../services/posts";

import ReviewCreateView from "./reviewsView/RCreate";
import ReviewSingleView from "./reviewsView/RSingle";
import ReviewListView from "./reviewsView/RList";
import { list as listReviewService } from "./../services/reviews";

import Navbar from "./../components/Navbar";

export class CommunityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      reviews: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {
      const posts = await listPostService();
      const reviews = await listReviewService();

      this.setState({
        posts,
        reviews
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  // 	try {
  // 		const posts = await listPostService();
  // 		const reviews = await listReviewService();

  // 		this.setState({
  // 			posts,
  // 			reviews
  // 		});
  // 		this.props.history.push('/community');
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // }

  // componentDidUpdate(prevProps, prevState) {
  // 	if (this.prevState !== this.state.posts) {
  // 		this.fetchData();
  // 	}
  // }

  render() {
    return (
      <div className="communityContainer">
          <div class="navBar">
            <Navbar user={this.props.user} />
          </div> 
          <div className='contentContainer'>
        <div className="postContainer">
          <h1>Message Board</h1>
          <PostCreateView onPostCreated={this.fetchData} />
          <PostListView posts={this.state.posts} />
        </div>

        <div className="reviewContainer">
          <h1>Reviews</h1>
          <ReviewListView reviews={this.state.reviews} />
        </div>
        </div>
      </div>
    );
  }
}

export default CommunityView;
