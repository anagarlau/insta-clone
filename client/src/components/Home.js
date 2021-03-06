import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


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
      console.log(loggedIn);
    if (loggedIn.user) {
      if (this.state.posts.length === 0) return <h3> Loading... </h3>;
      return (
        <div className='wall'>
          {this.state.posts.map((post) => (
            <div key={post._id} className="post" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title"> {post.postedBy.username}</h5>
                <img
                  src={post.imgURL}
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
