const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const category = require("./category");
const products = require("./products");
const cart = require("./cart")

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/category", category);
router.use("/product", products);
router.use("/cart", cart)


module.exports = router;
