import React, { Component } from 'react'
import PostCreateView from './postView/PCreate'

export class CommunityView extends Component {
  render() {
    return (
      <div>
        <h1>Message Board</h1>
        <PostCreateView/>

      </div>
    )
  }
}

export default CommunityView
