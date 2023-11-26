const URL = require("../models/urls");

exports.handleGetHomePage = async (req, res) => {
  if (!req.user) {
    console.log("NO req.user");
    return res.redirect("/login");
  }
  console.log("******************");
  allUrls = await URL.find({ createdBy: req.user._id });
  console.log(allUrls);
  res.render("pages/index", { urls: allUrls });
};

exports.handleGetSignUp = async (req, res) => {
  res.render("pages/signup");
};

exports.handleGetLogin = async (req, res) => {
  res.render("pages/login");
};
