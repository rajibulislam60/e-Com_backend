const express = require("express");
const {
  addcartController,
  getSingleUserCartController,
} = require("../../controller/cartController");
const router = express.Router();

router.post("/addtocart", addcartController);
router.get("/singleuserCart/:userId", getSingleUserCartController);

module.exports = router;
