const express = require("express");
const router = express.Router();

router.get("/aboutUs", (req, res) => {
  res.render("aboutUs", { title: "aboutUs" });
});

module.exports = router;