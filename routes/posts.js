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


router.get('/allPosts', loginCheck(), async(req, res)=>{
  try{
    const allPosts = await Post.find().populate('postedBy')

    res.json(allPosts)

  }catch(err){
    res.status(500).send()
  }
})


router.get('/userPosts', loginCheck(), async (req, res) =>{
  try{
  const userPosts = await Post.find({postedBy: req.user._id}).populate('postedBy')
    res.json(userPosts)
  }catch(err){
    res.status(500).send()
  }
})

module.exports = router;
