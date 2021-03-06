const router = require("express").Router();
const loginCheck = require("../middleware/loginCheck");
const Post = require("../models/Post");
const { uploader, cloudinary } = require("../config/config");

router.get("/allPosts", async (req, res) => {
  try {
    const allPosts = await Post.find().populate("postedBy");

    res.json(allPosts);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/allPosts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id).populate("postedBy");
    res.json(post);
  } catch (err) {
    res.status(500).send();
  }
});
// router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
//   // console.log('file is: ', req.file)

//   if (!req.file) {
//     next(new Error('No file uploaded!'));
//     return;
//   }

// })

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
    const userPosts = await Post.find({ postedBy: req.user._id }).populate(
      "postedBy"
    );
    res.json(userPosts);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
