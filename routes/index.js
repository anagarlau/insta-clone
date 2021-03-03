const router = require("express").Router();
const loginCheck = require('../middleware/loginCheck')

router.get("/test", (req, res, next) => {
  res.json("All good in here");
});



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
