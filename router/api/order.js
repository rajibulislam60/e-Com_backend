const express = require("express");
const {
  addorderController,
  getAllOrdersController,
} = require("../../controller/orderController");
const router = express.Router();

router.post("/addorder", addorderController);
router.get("/allorder", getAllOrdersController);

module.exports = router;
