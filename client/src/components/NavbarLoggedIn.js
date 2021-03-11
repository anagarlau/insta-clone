import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth-service.js";
import "../App.css";
import services from "../api/service";
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
    let ba = "";
    const uploadData = new FormData();
    uploadData.append("imgURL", e.target.files[0]);
    services
      .handleUploadPicture(uploadData)
      .then((res) => {
        ba = res.secure_url;
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      })
      .finally(() => {
        axios
          .post("/api/profiles/picture", {
            imgURL: ba,
          })
          .then((response) => {
            this.setState({ imgURL: response.data.imgURL });
          })
          .catch((err) => {
            console.log("Error while adding the thing: ", err);
          });
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
      <nav className="navbar navbar-expand-md navbar-light navBg navbarLogedin">
        <Link className="navbar-brand logo logoWidth" to={"/"}>
          Instaclone
        </Link>
        <img
          className="addButton"
          src="/img/add-button-pngrepo-com.png"
          alt="add"
        />
        <div>
          <Link className="nav-item nav-link" to={"/creatpost"}></Link>
          <div className="navbar-nav">
            <div>
              <form className="userImgForm">
                <label htmlFor="file-input">
                  <img
                    className='userImgNavbar'
                    alt="imageuser"
                    style={{ width: "30px" }}
                    src={this.state.imgURL}
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={this.getUserImage}
                />
              </form>
            </div>
            <Link className="nav-item nav-link" to={"/userprofile"}>
              {this.props.user.username}'s Profile
            </Link>
            <Link
              className="nav-item nav-link active"
              to="/"
              onClick={() => this.handleLogout(this.props)}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarLoggedIn;
