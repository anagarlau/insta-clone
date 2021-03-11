import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

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
      <div className="otherUserProfile">
        <div className="otherUserProfileHeader">
          <div className='userImageName'>
            <img
              alt="user profile"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src={this.state.posts[0].postedBy.imgURL}
            />
            <h3> {this.state.posts[0].postedBy.username}</h3>
          </div>
          <p><strong>{this.state.posts.length} posts </strong></p>
        </div>
        <div className="allUserPosts">
          {this.state.posts
            .slice(0)
            .reverse()
            .map((post) => (
              <div key={post._id}>
                <Link to={`/allPosts/${post._id}`}>
                  <img
                    style={{ width: "9rem", height: "9rem" }}
                    src={post.imgURL}
                    className="userImages"
                    alt="..."
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default OtherUserProfile;
