const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc Login/first page
//@router GET /

router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @desc Dashboard
//@router GET /dashboard

router.get("/dashboard", (req, res) => {
  console.log(req.user)
  res.render("dashboard");
});

module.exports = router;
