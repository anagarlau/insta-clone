import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import service from "../api/service";
import "../App.css";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
      imgURL: "",
      isFileUpoading: false,
    };
  }

  getPosts() {
    axios
      .get("/api/posts/userPosts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    if (this.state.posts.length === 0) return <h3> Loading... </h3>;
    // console.log(this.props)
    return (
      <div className="wall">
        <div>
          <form className="userImgForm">
            <label for="file-input">
              <img
                alt="imageuser"
                style={{ width: "30px" }}
                src={this.props.user.imgURL}
              />
            </label>
            <input id="file-input" type="file" />
          </form>
        </div>

        {this.state.posts
          .slice(0)
          .reverse()
          .map((post) => (
            <div key={post._id} className="post" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title"> {post.postedBy.username}</h5>
                <Link to={`/allPosts/${post._id}`}>
                  <img src={post.imgURL} className="card-img-top" alt="..." />
                </Link>
                <p className="card-text">{post.description}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default UserProfile;
