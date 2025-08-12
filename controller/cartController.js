const cartModel = require("../models/cartModel");

const addcartController = async (req, res) => {
  let { user, products, quantity, price } = req.body;
  try {
    let cart = new cartModel({
      user,
      products,
      quantity,
      price,
    });

    await cart.save();

    res.status(200).send({
      success: true,
      message: "Cart add successfully.",
      data: cart,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUserCartController = async (req, res) => {
  let { userId } = req.params;

  try {
    let singleuserCart = await cartModel
      .find({ user: userId })
      .populate("products");

    res.status(200).send({
      success: true,
      message: "Single user cart fatch successfully.",
      data: singleuserCart,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addcartController, getSingleUserCartController };
