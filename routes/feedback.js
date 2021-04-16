const express = require("express");
const router = express.Router();
const multer = require('multer')
const Feedback = require('../models/Feedback');

router.get("/feedback", (req, res) => {
  res.render("feedback", { title: "Feedback Form" });
});

router.post('/',  async(req,res) => {
  try{
    const feedback = new Feedback(req.body);
    await Feedback.feedback(feedback, req.body, (err) =>{
      if (err)
      {
        throw err
      }
      res.redirect('/')
    })
  }
  catch(err){
    res.status(400).send('Oops! Something went wrong.')
    console.log(err);
  }
})




module.exports = router;