const express = require("express");
const {
  addorderController,
  getAllOrdersController,
  getSingleOrderController,
} = require("../../controller/orderController");
const router = express.Router();

router.post("/addorder", addorderController);
router.get("/allorder", getAllOrdersController);
router.get("/singleorder/:id", getSingleOrderController);

module.exports = router;
