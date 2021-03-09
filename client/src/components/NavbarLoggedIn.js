import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth-service.js";
import "../App.css";
import service from "../api/service";
import axios from "axios";

class NavbarLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      imgURL: this.props.user.imgURL,
    };
  }

  getUserImage = (e) => {
    const uploadData = new FormData();
    uploadData.append("imgURL", e.target.files[0]);
    console.log(e.target.files[0]);
    service
      .handleUploadPicture(uploadData)
      .then((res) => {
        axios
          .post("/api/profiles/picture", {
            imgURL: res.secure_url,
          })
          .then((response) => {
            console.log(response);
            this.setState({ imgURL: response.data.imgURL });
          })
          .catch((err) => {
            console.log("Error while adding the thing: ", err);
          });
        console.log("added: ", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      });
  };

  handleLogout() {
    logout().then(() => {
      // console.log(this.props)
      this.props.setUser(null);
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light navBg"
        style={{ backgroundColor: "pink" }}
      >
        <Link className="navbar-brand" to={"/"}>
          {" "}
          Instagram{" "}
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <div>
              <form className="userImgForm">
                <label for="file-input">
                  <img
                    alt="imageuser"
                    style={{ width: "30px" }}
                    src={this.state.imgURL}
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  onClick={this.getUserImage}
                />
              </form>
            </div>
            <Link
              className="nav-item nav-link active"
              to="/"
              onClick={() => this.handleLogout(this.props)}
            >
              Logout
            </Link>
            <Link className="nav-item nav-link" to={"/userprofile"}>
              {this.props.user.username}'s Profile
            </Link>
            <Link className="nav-item nav-link" to={"/creatpost"}>
              {" "}
              <img
                className="addButton"
                src="/img/add-button-pngrepo-com.png"
                alt="add"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarLoggedIn;
