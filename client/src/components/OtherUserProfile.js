import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class OtherUserProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
    };
  }

  getPosts() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    axios
      .get(`/api/profiles/${id}`)
      .then((response) => {
        console.log(response);
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

    return (
      <div >
        <div>aaaaaa</div>
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

export default OtherUserProfile;
