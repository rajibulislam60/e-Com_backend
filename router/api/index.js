const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const category = require("./category");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/category", category);

module.exports = router;
