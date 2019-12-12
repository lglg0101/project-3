import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import AuthenticationSignUpView from './views/authenticationView/SignUpView';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>THIS IS THE THRIFT APP</h1>
				<AuthenticationSignUpView />
			</header>
		</div>
	);
}

export default App;
