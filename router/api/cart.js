const express = require("express");
const { addcartController } = require("../../controller/cartController");
const router = express.Router();

router.post("/addtocart", addcartController);

module.exports = router;
