const express = require("express");
const router = express.Router();
const passport = require("passport");

// @desc Auth with Google
//@router GET /auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc Google auth callback
//@router GET /auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

module.exports = router;
