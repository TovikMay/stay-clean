const express = require("express");
const router = express.Router();

router.get("/stayclean", (req, res) => {
  res.render("stayclean", { title: "stayclean" });
});

module.exports = router;