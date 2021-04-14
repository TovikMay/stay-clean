// https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
const express = require("express");
const router = express.Router();
const multer = require('multer')
const Login =require('../models/Login')
const passport = require('passport');

//gets and displays a login page
router.get("/", (req, res) => {
  res.render("login", { title: "Login form" });
});


router.post('/login', async(req,res) => {
  try{
    const login = new Login(req.body);
    await login.save()
    res.send('Thank you for your registration');
  }
  catch(err){
    console.log(err);
    res.send('Oops! Something went wrong.');
  }
})

// checks username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/addEmployee');
})



module.exports = router;