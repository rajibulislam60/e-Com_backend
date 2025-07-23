const express = require("express");
const { RegistrationController } = require("../../controller/authController");
const router = express.Router();

router.post("/registration", RegistrationController);

module.exports = router;
