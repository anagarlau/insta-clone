const loginCheck = () => {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).json({ errorMessage: "Please login" });
    }
  };
};

module.exports = loginCheck;
