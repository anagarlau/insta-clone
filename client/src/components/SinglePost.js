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
      comment: "",
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
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.props.user._id);
    console.log(this.state.post.postedBy._id);
  };

  handleSubmit = (e) => {
    const id = this.props.match.params.id;
    e.preventDefault();
    if (this.state.comment) {
      axios
        .post(`/api/posts/allPosts/${id}/comment`, {
          comment: this.state.comment,
        })
        .then((response) => {
          this.setState({ comment: "" });
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  componentDidMount() {
    this.getPost();
  }

  render() {
    if (this.state.post === null) return <h3> Loading... </h3>;
    const post = this.state.post;
    return (
      <div key={post._id} className="post" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title"> {post.postedBy.username}</h5>
          <img src={post.imgURL} className="card-img-top" alt="..." />
          <p className="card-text">{post.description}</p>
          
        </div>
        {this.props.user._id === this.state.post.postedBy._id ? <div><button>Delete</button></div> : ''}
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Comment:
              <input
                value={this.state.comment}
                name="comment"
                onChange={this.handleChange}
              />
            </label>
            <div></div>
            <button type="submit">Comment</button>
          </form>
          <div>
            {this.state.post.comments
              .slice(0)
              .reverse()
              .map((comment) => (
                <div key={comment._id}>
                  <h3>{comment.postedBy.username}</h3>
                  {comment.comment}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
