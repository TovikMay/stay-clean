const express = require("express");
const router = express.Router();

router.get("/landingMain", (req, res) => {
  res.render("landingMain", { title: "landingMain" });
});

module.exports = router;