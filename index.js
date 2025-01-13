const express = require("express");
const app = express();
const articleApiRouter = require("./articles/router");
const commentApiRouter = require("./comments/router");
const accountApiRouter = require("./accounts/router");
const errorHandler = require("./middlewares/errorHandlers");
const notFoundHandler = require("./middlewares/notFoundHandlers");

app.set("port", 8000);

app.use(express.json());
app.use("/articles", articleApiRouter);
app.use("/comments", commentApiRouter);
app.use("/accounts", accountApiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
