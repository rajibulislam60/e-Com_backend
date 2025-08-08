const express = require("express");
const {
  createProductsController,
} = require("../../controller/productController");
const router = express.Router();

router.post("/createProducts", createProductsController);

module.exports = router;
