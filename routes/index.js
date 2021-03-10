const router = require("express").Router();
 

router.get("/test", (req, res, next) => {
  res.send(req.user_id)
});



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
