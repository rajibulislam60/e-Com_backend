const express = require("express");
const {
  getAllUsersController,
  getSingleUserController,
} = require("../../controller/userController");
const router = express.Router();

router.get("/allusers", getAllUsersController);

router.get("/singleuser/:id", getSingleUserController);

module.exports = router;
