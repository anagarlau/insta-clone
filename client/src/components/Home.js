import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
 

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
    if (this.state.posts.length === 0) return <h3> Loading... </h3>;
    const loggedIn = this.props;
    // console.log(this.state.posts[0]._id);
    if (loggedIn.user) {
      return (
        <div className="d-flex justify-content-center">
          {this.state.posts.map((post) => (
            <div key={post._id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title"> {post.postedBy.username}</h5>
                <img
                  src="https://images.unsplash.com/photo-1570200861870-3a3113d79f74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="btn-toolbar justify-content-center">
          <Link className="btn btn-success  btn-sm" to={"/signup"}>
            Signup
          </Link>
          <Link className="btn btn-dark  btn-sm" to={"/login"}>
            Login
          </Link>
        </div>
      );
    }
  }
}

export default Home;
