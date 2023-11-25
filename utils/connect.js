const mongoose = require("mongoose");
const { connectionString } = require("./config");

exports.connect = () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Mongodb connected");
    })
    .catch((e) => {
      console.log("Failed to connect to mongodb,error:", e);
    });
};
