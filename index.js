const express = require("express");
const urlRouter = require("./routes/url");
const analyticsRouter = require("./routes/analytics");
const { PORT } = require("./utils/config");
const { connect } = require("./utils/connect");

app = express();

app.use(express.json());

connect();

app.use("/url", urlRouter);
app.use("/analytics", analyticsRouter);

app.listen(PORT, () => console.log("Listening on port", PORT));
