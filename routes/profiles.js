const router = require("express").Router();
const loginCheck = require("../middleware/loginCheck");
const Post = require("../models/Post");
const User = require("../models/User");
const { uploader, cloudinary } = require("../config/config");

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


router.post("/uploadpicture", uploader.single("imgURL"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.path });
});

router.post('/picture', (req, res)=>{
  const id=req.user._id
  const {imgURL} = req.body
  User.findByIdAndUpdate(id, {$set: {imgURL: imgURL}}, {new:true})
  .then(response=>res.json(response))
  .catch(err=>console.log(err))
})


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
