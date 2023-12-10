const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("./config");

exports.getUser = (token) => {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, jwtSecretKey);
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.setUser = (user) => {
  payload = { name: user.name, id: user._id, email: user.email };
  return jwt.sign(payload, jwtSecretKey);
};
