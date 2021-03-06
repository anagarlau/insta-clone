import React, { Component } from "react";
import { login } from "../../services/auth-service";
import "bootstrap/dist/css/bootstrap.css";
class Login extends Component {
  state = { username: "", password: "", email: "" };

  handleFormSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password).then((user) => {
      if (user.errorMessage) {
        this.setState({
          message: user.errorMessage,
          username: "",
          password: "",
        });
      } else {
        // the response from the server is a user object -> signup was successful
        // we want to put the user object in the state of App.js
        // console.log(user)
        this.props.setUser(user);
        this.props.history.push("/");
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form  onSubmit={this.handleFormSubmit}>
          <label className="form-label">
            Username:
            <input
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label className="form-label">
            Password:
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
