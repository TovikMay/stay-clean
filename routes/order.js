const express = require("express");
const router = express.Router();
const multer = require('multer')
const Order =require('../models/Order')

router.get("/order",  (req, res) => {
  res.render("order", { title: "order" });
});

router.post('/order', async(req,res) => {
  try{
    const order = new Order(req.body);
    await order.save()
    res.send('Thank you. Please continue');
  }
  catch(err){
    console.log(err);
    res.send('Oops! Something went wrong.');
  }
  
})

module.exports = router;