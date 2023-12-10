const USER = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../utils/auth");

exports.handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  await USER.create({ name: name, email: email, password: password });
  return res.redirect("/login");
};

exports.handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  let user = await USER.findOne({ email: email, password: password });
  console.log(user);
  if (!user) {
    return res.render("pages/login", {
      error: "Invalid username or password",
    });
  }
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
};
