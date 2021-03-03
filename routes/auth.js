const router = require("express").Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')
// const mongoose=require('mongoose')


// router.get("/",  (req, res, next) => {
//   res.json("All good in here");
// });

router.post('/signup', (req, res, next)=>{
  const {username, email, password } = req.body
   //validation before database
  if(!username || !email || !password){
    return res.status(400).json({errorMessage: 'Please fill in all the fields'})
   
  }if(password.length < 3){
   return res.status(400).json({errorMessage: 'Your password must be at least 3 characters long'})
  }
   User.findOne({username: username}).then(found=>{
     if(found !== null){
       return res.status(400).json({errorMessage: 'Username is already taken, please choose another'})
     }else{
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      User.create({username: username, email:email, password: hash})
      .then(createdUser=>{
         req.login(createdUser, (err)=>{
          if(err){
            return res.status(500).json({errorMessage: 'Login failed'})
          }
          return res.status(201).json(createdUser)
        })
      })
      .catch(err=> {
        res.json(err);
      })
     }
   })
})


module.exports = router;
