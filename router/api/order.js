const express = require("express");
const {
  addorderController,
  getAllOrdersController,
  getSingleOrderController,
  updateOrderController,
  cancelOrderController,
} = require("../../controller/orderController");
const router = express.Router();

router.post("/addorder", addorderController);
router.get("/allorder", getAllOrdersController);
router.get("/singleorder/:id", getSingleOrderController);
router.patch("/updateorder/:id", updateOrderController);
router.patch("/cancelorder/:id", cancelOrderController);

module.exports = router;
