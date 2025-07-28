const express = require("express");
const { getUserController } = require("../../controller/userController");
const router = express.Router();

router.get("/alluser", getUserController);

module.exports = router;
