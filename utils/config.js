require("dotenv").config();

exports.PORT = Number(process.env.PORT);
exports.connectionString = process.env.CONNECTIONSTRING;
