const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    imgURL: {
      type: String,
      required: true,
    },
    description: String,

    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
