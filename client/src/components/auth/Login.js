import React, { Component } from "react";
import { login } from "../../services/auth-service";
import "bootstrap/dist/css/bootstrap.css";
class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password).then((user) => {
      if (user.message) {
        this.setState({
          message: user.message,
          username: "",
          password: "",
        });
      } else {
        // the response from the server is a user object -> signup was successful
        // we want to put the user object in the state of App.js
        // console.log(user)
        this.props.setUser(user);
        //this.props.history.push("/");
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div >
        <form className='login' onSubmit={this.handleFormSubmit}>
          <label>
            <input
              placeholder="Username:"
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label>
            <input
              placeholder="Password:"
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <input className='loginButton' type="submit" value="Login" />
          {this.state.message && <h4>{this.state.message}</h4>}
        </form>
      </div>
    );
  }
}

export default Login;
