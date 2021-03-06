const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imgURL: {
    type: String,
    default: "https://i.stack.imgur.com/l60Hf.png"
  },

});

const User = model("User", userSchema);

module.exports = User;
