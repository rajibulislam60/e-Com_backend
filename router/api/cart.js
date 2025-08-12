const express = require("express");
const {
  addcartController,
  getSingleUserCartController,
  cartproductDeleteController,
  cartproductIncrementController,
  cartproductDecrementController,
} = require("../../controller/cartController");
const router = express.Router();

router.post("/addtocart", addcartController);
router.get("/singleuserCart/:userId", getSingleUserCartController);
router.delete("/cartproductDelete/:id", cartproductDeleteController);
router.patch("/productIncrement/:id", cartproductIncrementController);
router.patch("/productDecrement/:id", cartproductDecrementController);

module.exports = router;
