const express = require("express");
const { cartController } = require("../../controller/cartController");
const router = express.Router();

router.post("/addtocart", cartController);

module.exports = router;
