const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Story = require('../models/Story')

// @desc show add page
//@router GET /stories/add

router.get("/add", ensureAuth, (req, res) => {
  res.render('stories/add');
});


module.exports = router;
