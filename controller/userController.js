const userModel = require("../models/userModel");

const getSingleUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        massege: "User is not found",
      });
    }

    res.status(200).send({
      success: true,
      massege: "User get successfully.",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSingleUserController };
