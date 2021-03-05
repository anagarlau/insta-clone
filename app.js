require("dotenv/config");
// Handles http requests (express is node js framework)
const express = require("express");
const app = express();
//SETUP AUTHENTICATION - REQ MODULES
const session = require("express-session");
const bcrypt = require("bcrypt");
const passport = require("passport");
const MongoStore = require("connect-mongo").default;
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User.js");
const Post = require("./models/Post.js");
 const mongoose = require('./db/index.js')
 const cors = require('cors');
require("./config")(app);
//cors
app.use(
  cors({
    // this could be multiple domains/origins, but we will allow just our React app
    origin: ['http://localhost:3000']
  })
);
//SESSION SETUP
const mongoStore = MongoStore.create({
  mongoUrl: mongoose.MONGO_URI,
  collectionName: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false, // <== false if you don't want to save empty session object to the store
    // cookie: {
    //   sameSite: "none",
    //   httpOnly: true,
    //   maxAge: 60 * 1000 * 60,
    // },
    // store: mongoStore
  
  })
);

//define strategies
passport.serializeUser((user, cb) => cb(null, user._id));

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then((user) => cb(null, user))
    .catch((err) => cb(err));
});

passport.use(
  new LocalStrategy((username, password, done) => {
    // login
    User.findOne({ username: username })
      .then((userFromDB) => {
        if (userFromDB === null) {
          // there is no user with this username
          done(null, false, { message: "Wrong Credentials" });
        } else if (!bcrypt.compareSync(password, userFromDB.password)) {
          // the password is not matching
          done(null, false, { message: "Wrong Credentials" });
        } else {
          // the userFromDB should now be logged in
          done(null, userFromDB);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json())
require("./db");

//CORS MIDDLEWARE  
// app.use(cors({
//   credentials: true,
//   origin: ['http://localhost:3000']
// }));
//ROUTE HANDLING
const index = require("./routes/index");
app.use("/api", index);

const auth = require('./routes/auth')
app.use('/api/auth', auth)

const posts = require('./routes/posts')
app.use('/api/posts', posts)
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
