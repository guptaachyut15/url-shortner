const express = require("express");
const {
  handleCreateURL,
  handleGetURL,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleCreateURL);
router.get("/:id", handleGetURL);

module.exports = router;
