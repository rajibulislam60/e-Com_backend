const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("is it working.");
});

app.listen(PORT, () => {
  console.log("server is working");
});
