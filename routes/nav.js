const express = require("express");
const router = express.Router();
const multer = require('multer')


router.get("/aboutUs",  (req, res) => {
  res.render("aboutUs", { title: "aboutUs" });
});

router.post('/aboutUs', async(req,res) => {
  try{
    const aboutUs = new aboutUs(req.body);
    await aboutUs.save()
    res.send('Thank you. Please continue');
  }
  catch(err){
    console.log(err);
    res.send('Oops! Something went wrong.');
  }
  
})

module.exports = router;