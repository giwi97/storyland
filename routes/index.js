const express = require("express");
const router = express.Router();

// @desc Login/first page
//@router GET /

router.get("/", (req, res) => {
  res.send("Login");
});

// @desc Dashboard
//@router GET /dashboard

router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;
