const express = require("express");
const router = express.Router();
const multer = require('multer')
const Login =require('../models/Login')


router.get("/login", (req, res) => {
  res.render("login", { title: "login" });
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


module.exports = router;