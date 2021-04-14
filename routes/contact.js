const express = require("express");
const router = express.Router();
const multer = require('multer')
const Contact = require('../models/Contact');

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact us Form" });
});

router.post('/',  async(req,res) => {
  try{
    const contact = new Contact(req.body);
    await Contact.contact(contact, req.body.password, (err) =>{
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