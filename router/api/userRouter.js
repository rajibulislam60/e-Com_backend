const express = require("express");
const {
  getAllUsersController,
  getSingleUserController,
  userDeleteController,
} = require("../../controller/userController");
const router = express.Router();

router.get("/allusers", getAllUsersController);

router.get("/singleuser/:id", getSingleUserController);

router.delete("/userdelete/:id", userDeleteController);

module.exports = router;
