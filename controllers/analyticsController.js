const URL = require("../models/urls");

exports.handleGetAnalytics = async (req, res) => {
  let shortId = req.params.id;
  let data = await URL.findOne({ shortUrl: shortId });
  console.log(data);
  return res
    .status(200)
    .json({
      totalClicks: data.visitHistory.length,
      analytics: data.visitHistory,
    });
};
