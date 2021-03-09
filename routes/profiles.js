const router = require("express").Router();
const loginCheck = require("../middleware/loginCheck");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/:id", async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id)
    console.log(user)
    const userPosts = await Post.find({postedBy: req.params.id})
     .populate("postedBy", "_id username")
    .populate("comments.postedBy", "_id username");
    console.log(userPosts)
    res.json(userPosts) 
  }
  catch(err){
    console.log(err)
  }
 
  
})



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
