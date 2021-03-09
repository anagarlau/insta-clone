const router = require("express").Router();
const loginCheck = require("../middleware/loginCheck");
const Post = require("../models/Post");
const { uploader, cloudinary } = require("../config/config");

router.get("/allPosts", async (req, res) => {
  try {
    const allPosts = await Post.find()
      .populate("postedBy", "_id username")
      .populate("comments.postedBy", "_id username");
      
    res.json(allPosts);
  } catch (err) {
    res.status(500).send();
  }
});

router.post("/upload", uploader.single("imgURL"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.path });
});

router.post("/postIt", (req, res, next) => {
  const { description, imgURL } = req.body;

  if (!description || !imgURL) {
    res.status(400).json({
      errorMessage: "Please make something pretty for us to look at",
    });
  } else {
    Post.create({
      description: description,
      imgURL: imgURL,
      postedBy: req.user,
    })
      .then((createdPost) => {
        res.status(200).json(createdPost);
      })
      .catch((err) => {
        next(err);
      });
  }
});

router.get("/userPosts", async (req, res) => {
  try {
    const userPosts = await Post.find({ postedBy: req.user._id })
      .populate("postedBy", "_id username")
      .populate("comments.postedBy", "_id username");
    res.json(userPosts);
  } catch (err) {
    res.status(500).send();
  }
});


router.get("/allPosts/:id", loginCheck(), async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id)
      .populate("postedBy", "_id username")
      .populate("comments.postedBy", "_id username");
     
    res.json(post);
  } catch (err) {
    res.status(500).send();
  }
});

router.post("/allPosts/:id/comment", loginCheck(), (req, res) => {
  const comment = { comment: req.body.comment, postedBy: req.user._id };
  const id = req.params.id;
  Post.findByIdAndUpdate(
    id,
    {
      $push: { comments: comment },
    },
    { new: true }
  )
    .populate("postedBy", "_id username")
    .populate("comments.postedBy", "_id username")
    .then((response) => {
      console.log(response);
      res.json(response);
    });
});

router.post('/allPosts/:id/like', loginCheck(), (req, res)=>{
 const id=req.params.id
 Post.findByIdAndUpdate(
   id,
   {$push: {likes: req.user._id}},
   {new: true}
 )
 .populate("postedBy")
 .populate("comments.postedBy", "_id username")
 .then(response=>{
  // console.log(response)
   res.json(response)
 })
 .catch(err=>{console.log(err)})
})

router.post('/allPosts/:id/unlike', loginCheck(), (req, res)=>{
  const id=req.params.id
  Post.findByIdAndUpdate(
    id,
    {$pull: {likes: req.user._id}},
    {new: true}
  )
  .populate("postedBy")
  .populate("comments.postedBy", "_id username")
  .then(response=>{
   
    res.json(response)
  })
  .catch(err=>{console.log(err)})
 })


// router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
//   // console.log('file is: ', req.file)

//   if (!req.file) {
//     next(new Error('No file uploaded!'));
//     return;
//   }

// })



router.delete("/allPosts/:id", loginCheck(), (req, res, next) => {
  Post.findByIdAndDelete(req.params.id).then(() => {
    res
      .status(200)
      .json({ message: "post deleted" })
      .catch((err) => {
        next(err);
      });
  });
});


router.post("/allPosts/:id/uncomment", loginCheck(), (req, res, next) => {
  const id = req.params.id;
  const commentId = req.body.commentId;
  Post.findByIdAndUpdate(
    id,
    {
      $pull: { comments: { _id: commentId } },
    },
    { new: true }
  )
    .populate("postedBy", "_id username")
    .populate("comments.postedBy", "_id username")
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
