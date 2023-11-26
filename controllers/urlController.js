const shortid = require("shortid");
const URL = require("../models/urls");

exports.handleCreateURL = async (req, res) => {
  let body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "Url must be passed" });
  }
  let shortId = shortid.generate();
  URL.create({
    shortUrl: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render("pages/index", { url: shortId });
};

exports.handleGetURL = async (req, res) => {
  let shortId = req.params.id;
  console.log(shortId);
  let data = await URL.findOneAndUpdate(
    { shortUrl: shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } },
    { returnDocument: "after" }
  );
  res.redirect(data.redirectURL);
};
