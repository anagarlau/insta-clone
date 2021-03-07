import axios from "axios";
import React from "react";
// import { Link } from "react-router-dom";
import "../App.css";

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.getPost = this.getPost.bind(this);
    this.state = {
      post: null,
    };
  }

  getPost() {
    const id = this.props.match.params.id;
    axios
      .get(`/api/posts/allPosts/${id}`)
      .then((response) => {
        this.setState({ post: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    console.log(this.state.post)
    if (this.state.post === null) return <h3> Loading... </h3>;
    const post = this.state.post
    return (
      <div key={post._id} className="post" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title"> {post.postedBy.username}</h5>
            <img src={post.imgURL} className="card-img-top" alt="..." />
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    );
  }
}

export default SinglePost;
