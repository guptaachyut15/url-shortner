const URL = require("../models/urls");

exports.handleGetHomePage = async (req, res) => {
  if (!req.user) {
    console.log("NO req.user");
    return res.redirect("/login");
  }
  allUrls = await URL.find({ createdBy: req.user._id });
  res.render("pages/index", { urls: allUrls });
};

exports.handleGetSignUp = async (req, res) => {
  res.render("pages/signup");
};

exports.handleGetLogin = async (req, res) => {
  res.render("pages/login");
};
