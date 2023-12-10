const { getUser } = require("../utils/auth");

exports.authenticateUser = async (req, res, next) => {
  let sessionId = req.cookies?.uid;
  if (!sessionId) {
    console.log("No sessionId found");
    return res.redirect("/login");
  }
  let user = getUser(sessionId);
  if (!user) {
    console.log("No user found related to the passed session id");
    return res.redirect("/login");
  }
  req.user = user;
  next();
};

exports.validateUser = async (req, res, next) => {
  let sessionId = req.cookies?.uid;
  console.log(sessionId);
  let user = getUser(sessionId);
  req.user = user;
  next();
};
