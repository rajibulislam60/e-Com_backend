const express = require("express");
const {
  createCategoryController,
} = require("../../controller/categoryController");
const router = express.Router();

router.post("/createCategory", createCategoryController);

module.exports = router;
