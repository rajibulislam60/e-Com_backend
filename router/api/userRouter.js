const express = require("express");
const { getSingleUserController } = require("../../controller/userController");
const router = express.Router();

router.get("/singleuser/:id", getSingleUserController);

module.exports = router;
