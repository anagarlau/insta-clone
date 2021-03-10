// const { text } = require("express");
const { Schema, model } = require("mongoose");
const postSchema = new Schema(
  {
    imgURL: {
      type: String,
    },
    description: String,
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        postedBy: { type: Schema.Types.ObjectId, ref: "User" },
        comment: String,
      },
    ],
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  { timestamps: true }
);
const Post = model("Post", postSchema);
module.exports = Post;