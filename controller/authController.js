const userModel = require("../models/userModel");

const RegistrationController = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;

    if (!userName || !email || !phone || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields.",
      });
    }

    const exisiting = await userModel.findOne({ email });

    if (exisiting) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields.",
      });
    }

    const user = await userModel.create({
      userName,
      email,
      phone,
      password,
    });

    res.status(201).send({
      success: true,
      message: "Registration successful",
    });

    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RegistrationController };
