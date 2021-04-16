const express = require("express");
const router = express.Router();
const multer = require('multer')


router.get("/nav",  (req, res) => {
  res.render("nav", { title: "nav" });
});

router.post('/nav', async(req,res) => {
  try{
    const nav = new nav(req.body);
    await nav.save()
    res.send('Thank you. Please continue');
  }
  catch(err){
    console.log(err);
    res.send('Oops! Something went wrong.');
  }
  
})

module.exports = router;