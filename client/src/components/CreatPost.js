import React from "react";
// import axios from "axios";
import service from "../api/service";

class CreatePost extends React.Component {
  state = {
    message: '',
    description: "",
    imgURL: "",
    isFileUpoading: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = (e) => {
    e.preventDefault();
    this.setState({ isFileUpoading: true });
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imgURL", e.target.files[0]);
    service
      .handleUpload(uploadData)
      .then((response) => {
        console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imgURL: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      })
      .finally(() => {
        this.setState({ isFileUpoading: false });
      });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    service
      .createPost(this.state)
      .then((res) => {
        console.log("added: ", res);
        // here you would redirect to some other page
        this.props.history.push("/userprofile");
      })
      .catch((err) => {
        this.setState({message: 'Please make something pretty'})
        console.log("Error while adding the thing: ", err);
      });
  };
  render() {
    console.log("this is the state", this.state);
    console.log(this.state);
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
        <label> Img: </label>
        <input type="file" onChange={(e) => this.handleFileUpload(e)} />
        <button disabled={this.state.isFileUpoading} type="submit">
          Post
        </button>
        {this.state.message && (
            <h4>{this.state.message}</h4>
          )}
      </form>
    );
  }
}
export default CreatePost;