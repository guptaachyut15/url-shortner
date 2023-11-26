const express = require("express");

const urlRouter = require("./routes/url");
const analyticsRouter = require("./routes/analytics");
const userRouter = require("./routes/user");
const staticRouter = require("./routes/static");

const { authenticateUser, validateUser } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const { PORT } = require("./utils/config");
const { connectMongoDB } = require("./utils/connect");

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectMongoDB();
app.set("view engine", "ejs");

app.use("/url", authenticateUser, urlRouter);
app.use("/analytics", analyticsRouter);
app.use("/user", userRouter);

app.use("/", validateUser, staticRouter);

app.listen(PORT, () => console.log("Listening on port", PORT));
