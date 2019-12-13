import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AuthenticationSignUpView from "./views/authenticationView/SignUpView";
import AuthenticationSignInView from "./views/authenticationView/LoginView";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import CommunityView from "./views/CommunityView";
import PostCreateView from "./views/postView/PCreate";
import PostSingleView from "./views/postView/PSingle";
import PostListView from "./views/postView/PList";
import PostEditView from "./views/postView/PEdit"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
      // loaded: false
    };
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(
      this
    );
    this.verifyAuthentication = this.verifyAuthentication.bind(this);
  }

  changeAuthenticationStatus(user) {
    this.setState({
      user
    });
  }

  verifyAuthentication() {
    return this.state.user;
  }

  render() {
    const user = this.state.user;
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <h1>THIS IS THE THRIFT APP</h1>
            {/* <AuthenticationSignUpView />
				<AuthenticationSignInView/> */}
          </header>
          <Navbar
            user={this.state.user}
            changeAuthenticationStatus={this.changeAuthenticationStatus}
          />
          <Switch>
            {/* {this.state.loaded && (
             */}
            {/* <ProtectedRoute
                path="/create"
                // component={NoteCreateView}
                render={props => <NoteCreateView {...props} />}
                verify={this.verifyAuthentication}
                redirect="/error/401"
              /> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/community" component={CommunityView} />
            <Route exact path="/post/create" component={PostCreateView} />
            <Route exact path="/post/list" component={PostListView} />
            <Route exact path="/post/:id" component={PostSingleView} />
            <Route path="/:id/edit" component={PostEditView} />
            <Route
              path="/sign-up"
              render={props => (
                <AuthenticationSignUpView
                  {...props}
                  changeAuthenticationStatus={this.changeAuthenticationStatus}
                />
              )}
            />
            <Route
              path="/sign-in"
              render={props => (
                <AuthenticationSignInView
                  {...props}
                  changeAuthenticationStatus={this.changeAuthenticationStatus}
                />
              )}
            />
            {/* <Route path="/private" component={AuthenticationPrivateView} /> */}

            {/* <Route path="/error/:code" component={} />
              <Route path="/" exact component={} />
             
              <Route path="/:id" component={} /> */}
            {/* <Redirect to="/error/404" /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
