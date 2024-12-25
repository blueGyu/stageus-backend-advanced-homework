const express = require("express");
const app = express();

const articleApiRouter = require("./routers/article.api.router");
const commentApiRouter = require("./routers/comment.api.router");

app.set("port", 8000);

app.use(express.json());
app.use("/api/article", articleApiRouter);
app.use("/api/comment", commentApiRouter);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
