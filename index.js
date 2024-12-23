const express = require("express");
const app = express();

app.set("port", 8000);

app.get("/", (req, res) => {
  res.send("hello node");
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on port`, app.get("port"));
});
