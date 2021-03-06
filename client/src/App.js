import React, { Component } from "react";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Switch, Route, Redirect } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import CreatPost from "./components/CreatPost"
import SinglePost from "./components/SinglePost"
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    // console.log(this.state.user);
    return (
      <div className="App">
        <NavBar user={this.state.user} setUser={this.setUser} />
        {/* <Home  user={this.state.user}  /> */}
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <Home user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/allPosts/:id"
            render={(props) => <SinglePost user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/userprofile"
            render={(props) => {
              if (this.state.user) {
                return <UserProfile {...props} />;
              } else return <Redirect to="/" />;
            }}
          />
          <Route
            exact
            path="/creatpost"
            render={(props) => {
              if (this.state.user) {
                return <CreatPost {...props} />;
              } else return <Redirect to="/" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
