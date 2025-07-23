const express = require("express");
const {
  RegistrationController,
  loginController,
} = require("../../controller/authController");
const router = express.Router();

router.post("/registration", RegistrationController);
router.post("/login", loginController);

module.exports = router;
