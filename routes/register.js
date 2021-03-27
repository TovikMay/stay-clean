const express = require("express");
const router = express.Router();
const multer = require('multer')
const Register =require('../models/Register')

router.get("/register", (req, res) => {
  res.render("register", { title: "register" });
});

router.post('/register',  async(req,res) => {
  try{
    const register = new Register(req.body);
    await register.save()
    res.send('Thank you for your registration');
  }
  catch(err){
    console.log(err);
    res.send('Oops! Something went wrong.');
  }
})

module.exports = router;