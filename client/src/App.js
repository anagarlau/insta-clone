import React, { Component } from "react";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Switch, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
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
    console.log(this.state.user);
    return (
      <div className="App">
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
          <Route exact path="/" component={Home} />
        </Switch> 
      </div>
    );
  }
}

export default App;
