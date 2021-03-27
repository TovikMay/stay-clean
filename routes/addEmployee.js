// https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
const express = require("express");
const router = express.Router();
const multer = require('multer')
const AddEmployee =require('../models/AddEmployee')


router.get("/employee", (req, res) => {
  res.render("addEmployee", { title: "addEmployee" });
});

//image upload 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage})

router.post('/addEmployee', upload.single('imageupload'), async(req,res) => {
    const addEmployee = new AddEmployee(req.body);
    addEmployee.imageupload - req.file.path;
    try{
        const addEmployee = new AddEmployee(req.body);
        await addEmployee.save()
        res.redirect('/employee');
      }
      catch(err){
        console.log(err);
        res.send('Oops! Something went wrong.');
      }
})

router.get("/", async(req, res) => {
  try {
    const employeeDetails = await AddEmployee.find();
    res.render("employeeList", { users: "Employee List" });
  }catch(err){
    res.send('Failed to retrive employee details');
  }
  
});
module.exports = router;
