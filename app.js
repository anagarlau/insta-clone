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
 const path = require('path');
 app.use(express.static(path.join(__dirname, "/client/build")));

require("./config")(app);
//cors
app.use(
  cors({
    // this could be multiple domains/origins, but we will allow just our React app
    origin: ['http://localhost:3000'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
//SESSION SETUP
const mongoStore = MongoStore.create({
  mongoUrl: mongoose.MONGO_URI,
  collectionName: "sessions",
});

// const MongoStore = require('connect-mongo').default;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    // cookie: {
    //   sameSite: "none",
    //   httpOnly: true,
    //   maxAge: 60 * 1000 * 60,
    // },
    // store: mongoStore
  })
)
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
const allRoutes = require("./routes");
app.use("/api", allRoutes);

// app.use('/api', require('./routes/index'))
const auth = require('./routes/auth')
app.use('/api/auth', auth)

const posts = require('./routes/posts')
app.use('/api/posts', posts)

const profiles = require('./routes/profiles')
app.use('/api/profiles', profiles)
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

require("./error-handling")(app);

module.exports = app;
