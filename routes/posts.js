const router = require("express").Router();
const loginCheck = require('../middleware/loginCheck')
const Post = require('../models/Post')

router.post("/postIt", loginCheck(), (req, res) => {
  const {title, description, imgURL} = req.body
  if(!title || !description || !imgURL){
    res.status(400).json({errorMessage: 'Please make something pretty for us to look at'})
  }
  Post.create({title: title, description: description, imgURL: imgURL, postedBy: req.user})
  .then(createdPost=>{res.status(200).json(createdPost)})
  .catch(err=>{console.log(err)})
});

 

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
