// https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
const express = require("express");
const router = express.Router();
const multer = require('multer')
const AddEmployee =require('../models/AddEmployee')


router.get("/addEmployee", (req, res) => {
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
    console.log(req.body);    
    try{
        const addEmployee = new AddEmployee(req.body);
        addEmployee.imageupload - req.file.path;
        await addEmployee.save()
        // res.send('submited')
        res.redirect('/addEmployee/');
      }
      catch(err){
        console.log(err);
        res.send('Oops! Something went wrong.');
      }
})
//get data from database
router.get("/", async(req, res) => {
  try {
    const employeeDetails = await AddEmployee.find();
    res.render("employeeList", { users: employeeDetails});
  }catch(err){
    res.send('Failed to retrive employee details');
  }
  
});

//updated employee details
router.get('/update/:id', async (req, res) => {
  try {
      const updateddEmployee = await addEmployee.findOne({ _id: req.params.id })
      res.render('updateEmployee', { user: updateaddEmployee })
  } catch (err) {
      res.status(400).send("Unable to find item in the database");
  }
})
// route to save the deleted updated data
router.post('/update', async (req, res) => {
  try {
      await addEmployee.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('/employee/employeeList');
  } catch (err) {
      res.status(404).send("Unable to update item in the database");
  }
})


module.exports = router;
