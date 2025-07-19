const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("test router is working well");
});

module.exports = router;
