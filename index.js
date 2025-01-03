const express = require("express");
const app = express();

const articleApiRouter = require("./routers/article.router");
const commentApiRouter = require("./routers/comment.router");
const accountApiRouter = require("./routers/account.router");

app.set("port", 8000);

app.use(express.json());
app.use("/articles", articleApiRouter);
app.use("/comments", commentApiRouter);
app.use("/accounts", accountApiRouter);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
