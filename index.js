const express = require("express");
const session = require("express-session");
const app = express();
const articleApiRouter = require("./articles/router");
const commentApiRouter = require("./comments/router");
const accountApiRouter = require("./accounts/router");
const errorHandler = require("./middlewares/errorHandlers");
const notFoundHandler = require("./middlewares/notFoundHandlers");

require("dotenv").config();

app.set("port", process.env.PORT || 8000);

const secret = process.env.ENVIRONMENT === "DEV" ? process.env.SESSION_SECRET_DEV : process.env.SESSION_SECRET_PROD
const secure = process.env.ENVIRONMENT === "PROD";
app.use(session({
  secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    secure
  },
  name: "session-cookie",
}))

app.use(express.json());
app.use("/articles", articleApiRouter);
app.use("/comments", commentApiRouter);
app.use("/accounts", accountApiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
