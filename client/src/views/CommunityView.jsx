import React, { Component } from "react";
import PostCreateView from "./postView/PCreate";
import PostSingleView from "./postView/PSingle";

export class CommunityView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Message Board</h1>
        <PostCreateView />

      
      </div>
    );
  }
}

export default CommunityView;
