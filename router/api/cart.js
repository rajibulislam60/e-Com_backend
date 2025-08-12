const express = require("express");
const {
  addcartController,
  getSingleUserCartController,
  cartproductDeleteController,
} = require("../../controller/cartController");
const router = express.Router();

router.post("/addtocart", addcartController);
router.get("/singleuserCart/:userId", getSingleUserCartController);
router.delete("/cartproductDelete/:id", cartproductDeleteController);

module.exports = router;
