const { Schema, model } = require("mongoose");


const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: String,
  description: String,
  comments: [String],
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    },
});

const Post = model("Post", postSchema);

module.exports = Post;
