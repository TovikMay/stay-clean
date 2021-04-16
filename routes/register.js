const express = require("express");
const router = express.Router();
const multer = require('multer')
const Register = require('../models/Register');
const passport = require('passport');

router.get("/register", (req, res) => {
  res.render("registerAdmin", { title: "Register Form" });
});

router.post('/',  async(req,res) => {
  try{
    const register = new Register(req.body);
    await Register.register(register, req.body.password, (err) =>{
      if (err)
      {
        throw err
      }
      res.redirect('/login')
    })
  }
  catch(err){
    res.status(400).send('Oops! Something went wrong.')
    console.log(err);
  }
})

router.post('/', passport.authenticate('local', {failureRedirect: '/register'}), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/login');
})



module.exports = router;