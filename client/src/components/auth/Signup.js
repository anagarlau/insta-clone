import React, { Component } from "react";
import { signup } from "../../services/auth-service";
import "bootstrap/dist/css/bootstrap.css";
class Signup extends Component {
  state = { username: "", password: "", email: "" };

  handleFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const { username, password, email } = this.state;
    signup(username, password, email).then((user) => {
      if (user.errorMessage) {
        this.setState({
          message: user.errorMessage,
          username: "",
          password: "",
          email: "",
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
      <div className="signupBg">
        <div className="signupFormBg">
          <h3 className='logo'>Instaclone</h3>
          <form className="signupForm" onSubmit={this.handleFormSubmit}>
            <label>
              <input
                className="form-control"
                placeholder="Username:"
                type="text"
                name="username"
                value={this.state.username}
                onChange={(e) => this.handleChange(e)}
              />
            </label>

            <label>
              <input
                className="form-control"
                placeholder="Password:"
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </label>

            <label>
              <input
                className="form-control"
                placeholder="Email:"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
            </label>

            <input className="loginButton" type="submit" value="Signup" />
            {this.state.message && <h6>{this.state.message}</h6>}
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
