const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const category = require("./category");
const products = require("./products");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/category", category);
router.use("/product", products);

module.exports = router;
