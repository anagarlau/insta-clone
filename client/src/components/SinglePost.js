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
      like: ''
    };
  }

  getPost() {
    const id = this.props.match.params.id;
    console.log(id)
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
    // console.log(this.props.user._id);
    // console.log(this.state.post.comments);
  };

  handlePostDelete = () => {
    const id = this.props.match.params.id;
    axios
      .delete(`/api/posts/allPosts/${id}`)
      .then(this.props.history.push("/"))
      .catch((err) => {
        console.log(err);
      });
  };

  handleCommentDelete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const commentId = e.target.value;
    console.log(this.state.post);
    axios
      .post(`/api/posts/allPosts/${id}/uncomment`, {
        commentId: commentId,
      })
      .then((response) => {
        //this needs fixing
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
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
          //this needs fixing
          console.log(response);
          this.setState({ comment: "", post: response.data});
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  likePost =(e)=>{
    const id = this.props.match.params.id;
    console.log(id)
    e.preventDefault();
    // const id = this.props.match.params.id;
    // const commentId = e.target.value;
    console.log(this.state.post);
    axios
      .post(`/api/posts/allPosts/${id}/like`, {
        like: this.state.like,
      })
      .then((response) => {
        //this needs fixing
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  unlikePost =(e)=>{
    const id = this.props.match.params.id;
    console.log(id)
    e.preventDefault();
    // const id = this.props.match.params.id;
    // const commentId = e.target.value;
    console.log(this.state.post);
    axios
      .post(`/api/posts/allPosts/${id}/unlike`, {
        like: this.state.like,
      })
      .then((response) => {
        //this needs fixing
        console.log(response);
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
    const post = this.state.post;
    return (
      <div key={post._id} className="post" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title"> {post.postedBy.username}</h5>
          <img src={post.imgURL} className="card-img-top" alt="..." />
          <p className="card-text">{post.description}</p>
        </div>
        <div> 
        <button  onClick={this.likePost}> Like </button>
        <button onClick={this.unlikePost}> Unlike </button>
        </div>
        {this.props.user._id === this.state.post.postedBy._id ? (
          <div>
            <button onClick={this.handlePostDelete}>Delete</button>
          </div>
        ) : (
          ""
        )}
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
                  {this.props.user._id === comment.postedBy._id ? (
                    <button
                      value={comment._id}
                      onClick={this.handleCommentDelete}
                    >
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
