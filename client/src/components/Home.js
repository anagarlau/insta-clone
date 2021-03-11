import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Login from "./auth/Login";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
    };
  }

  getPosts() {
    axios
      .get("/api/posts/allPosts")
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
    const loggedIn = this.props;
    if (loggedIn.user) {
      if (this.state.posts.length === 0) return <h3> Loading... </h3>;
      return (
        <div className="wall">
          {this.state.posts
            .slice(0)
            .reverse()
            .map((post) => (
              <div key={post._id} className="post" style={{ width: "35rem" }}>
                <div className="card-body">
                  <div className="userImgName">
                    <img
                      alt="user profile"
                      style={{ width: "30px" }}
                      src={post.postedBy.imgURL}
                    />
                    &nbsp;&nbsp;
                    {loggedIn.user._id === post.postedBy._id ? (
                      <div>
                        <Link to={`/userprofile`}>
                          <h5 className="card-title userName">
                            {post.postedBy.username}
                          </h5>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link to={`/otheruser/${post.postedBy._id}`}>
                          <h5 className="card-title userName">
                            {post.postedBy.username}
                          </h5>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link to={`/allPosts/${post._id}`}>
                    <img src={post.imgURL} className="card-img-top" alt="..." />
                  </Link>
                  <div className="likeDescription">
                    <p className="card-text">
                      <strong>{post.postedBy.username}: </strong>
                      {post.description}
                    </p>
                    <div>
                      <img
                        style={{ width: "20px" }}
                        alt="heart"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                      />
                      {post.likes.length}
                    </div>
                  </div>
                  <div>
                    {post.comments.slice(-1).map((comment) => (
                      <div className="lastComment" key={comment._id}>
                        <p>last comment:</p>
                        <p>
                          <strong>{comment.postedBy.username}: </strong>
                          {comment.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    } else {
      return (
        <div className="homeScreen">
          <div className="innerHomeScreen">
            <Login setUser={this.props.setUser} {...this.props} />
          </div>

          <div className="innerHomeScreen">
            Don't have account? &nbsp;&nbsp;
            <Link to={"/signup"}>Signup</Link>
          </div>
        </div>
      );
    }
  }
}

export default Home;
