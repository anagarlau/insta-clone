import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import service from "../api/service";
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
      <div className="otherUserProfile">
        <div className="otherUserProfileHeader">
        <div className='userImageName'>
            <img
              alt="user profile"
              style={{height: '50px', width: "50px", borderRadius: "50%" }}
              src={this.props.user.imgURL}
            />
            <h3>
            Hi, {this.props.user.username}
          </h3>
          </div>
          <p> <strong>{this.state.posts.length} posts </strong> </p>
        </div>
        <div className="allUserPosts">
        {this.state.posts
          .slice(0)
          .reverse()
          .map((post) => (
            <div key={post._id} >
              <div>
                <Link to={`/allPosts/${post._id}`}>
                  <img style={{ width: "9rem", height: "9rem" }} className="userImages" src={post.imgURL} alt="..." />
                </Link>
              </div>
            </div>
          ))}
          </div>
      </div>
    );
  }
}

export default UserProfile;
