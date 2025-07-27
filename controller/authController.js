const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      userName,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).send({
      success: true,
      message: "Registration successful",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields.",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User is not found.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_Secret, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful.",
      data: user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RegistrationController, loginController };
