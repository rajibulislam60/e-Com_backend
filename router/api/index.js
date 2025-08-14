const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const category = require("./category");
const products = require("./products");
const cart = require("./cart");
const order = require("./order");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/category", category);
router.use("/product", products);
router.use("/cart", cart);
router.use("/order", order);

module.exports = router;
