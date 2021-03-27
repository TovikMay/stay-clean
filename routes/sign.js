const express = require("express");
const router = express.Router();
const multer = require('multer')
const Sign =require('../models/Sign')

router.get("/sign", (req, res) => {
  res.render("sign", { title: "sign" });
});

router.post('/sign', async(req,res) => {
  try{
    const sign = new Sign(req.body);
    await sign.save()
    res.send('Thank you. Please continue.');
  }
  catch(err){
    console.log(err);
    res.send('Oops! Something went wrong.');
  }
})
  
module.exports = router;