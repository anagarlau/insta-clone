import React from "react";
import axios from "axios";
class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("this is event", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/posts/postIt", {
        imgURL: this.state.imgURL,
        description: this.state.description,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          imgURL: "",
          description: "",
        });
        this.props.history.push('/userprofile');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("this is the state", this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
          <input
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Img:
          <input
            value={this.state.imgURL}
            name="imgURL"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Post</button>
      </form>
    );
  }
}

export default CreatePost;
