import React from "react";
import axios from "axios";
//import {Link} from 'react-router-dom'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
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
  }
}

export default UserProfile;
