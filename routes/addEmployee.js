// https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
const express = require("express");
const router = express.Router();
const multer = require('multer')


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

router.post('/createEmployee', upload.single('imageupload'), (req,res) => {
    try {
        console.log(req.file)
    }
    catch(err) {
        res.send(400);
    }
})

module.exports = router;
