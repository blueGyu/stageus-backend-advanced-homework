const express = require("express");
const app = express();

const articleApiRouter = require("./routers/articles.router");
const commentApiRouter = require("./routers/comments.router");
const accountApiRouter = require("./routers/accounts.router");
const errorHandler = require("./middlewares/errorHandlers.middleware");

app.set("port", 8000);

app.use(express.json());
app.use("/articles", articleApiRouter);
app.use("/comments", commentApiRouter);
app.use("/accounts", accountApiRouter);

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
