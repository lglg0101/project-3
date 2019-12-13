import React, { Component } from 'react';
import PostCreateView from './postView/PCreate';
import PostSingleView from './postView/PSingle';

export class CommunityView extends Component {
	render() {
		return (
			<div>
				<h1>Message Board</h1>
				<PostCreateView />

				<PostSingleView />
			</div>
		);
	}
}

export default CommunityView;
