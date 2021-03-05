const router = require("express").Router();
const loginCheck = require("../middleware/loginCheck");
const Post = require("../models/Post");
const { uploader, cloudinary } = require('../config/config');


router.post('/upload', loginCheck(), uploader.single('imgURL'), (req, res, next) => {
  
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }   
  res.json({ secure_url: req.file.path });
});


router.post("/postIt", loginCheck(), uploader.single('imgURL'), (req, res, next) => {
    const { description, imgURL } = req.body;
    
    if (!description) {
      res.status(400).json({
        errorMessage: "Please make something pretty for us to look at",
      });
    }
    
    Post.create({
      description: description,
      imgURL: imgURL,
      // postedBy: req.user,
    })
      .then((createdPost) => {
        res.status(200).json(createdPost);
      })
      .catch((err) => {
        next(err);
      });
  });

router.get("/allPosts", loginCheck(), async (req, res) => {
  try {
    const allPosts = await Post.find().populate("postedBy");

    res.json(allPosts);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/userPosts", loginCheck(), async (req, res) => {
  try {
    const userPosts = await Post.find({ postedBy: req.user._id }).populate(
      "postedBy"
    );
    res.json(userPosts);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
