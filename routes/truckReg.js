const express = require("express");
const router = express.Router();
const multer = require('multer')
const TruckReg = require('../models/TruckReg');

router.get("/truckReg", (req, res) => {
  res.render("truckReg", { title: "Truck Registration" });
});

router.post('/',  async(req,res) => {
  try{
    const truckReg = new TruckReg(req.body);
    await truckReg.save()
    res.send('Thank you. Please continue');
      if (err)
      {
        throw err
      }
      res.redirect('/order')
    }
catch(err){
    res.status(400).send('Oops! Something went wrong.')
    console.log(err);
  }
})




module.exports = router;