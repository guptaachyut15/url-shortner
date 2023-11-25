const express = require("express");
const { handleGetAnalytics } = require("../controllers/analyticsController");

const router = express.Router();

router.get("/:id", handleGetAnalytics);

module.exports = router;
