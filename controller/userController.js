const userModel = require("../models/userModel");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");

    res.status(200).send({
      success: true,
      message: "All users fetched successfully.",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id).select("-password");
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User is not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "User get successfully.",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const userDeleteController = async (req, res) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Profile delete successfully",
      data: deleteUser,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsersController,
  getSingleUserController,
  userDeleteController,
};
