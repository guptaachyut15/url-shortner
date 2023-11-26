const express = require("express");
const {
  handleGetHomePage,
  handleGetSignUp,
  handleGetLogin,
} = require("../controllers/staticController");

const router = express.Router();

router.get("/", handleGetHomePage);
router.get("/signup", handleGetSignUp);
router.get("/login", handleGetLogin);

module.exports = router;
