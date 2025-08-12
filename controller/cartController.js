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

const cartproductDeleteController = async (req, res) => {
  let { id } = req.params;
  try {
    const cart = await cartModel
      .findOneAndDelete({ _id: id })
      .populate("products");
    res.status(200).send({ msg: "Cart item delete done", data: cart });
  } catch (error) {
    console.log(error);
  }
};

const cartproductIncrementController = async (req, res) => {
  let { id } = req.params;
  try {
    const cart = await cartModel.findOne({ _id: id }).populate("products");

    if (cart.products.stock > cart.quantity) {
      cart.quantity++;
      await cart.save();
      res.status(200).send({ msg: "Cart quantity increment done", data: cart });
    } else {
      res.status(200).send({ msg: "Out of Stock" });
    }
  } catch (error) {
    console.log(error);
  }
};

const cartproductDecrementController = async(req, res) => {
  let { id } = req.params;

  try {
    const cart = await cartModel.findOne({ _id: id }).populate("products");
    if (cart.quantity > 1) {
      cart.quantity--;
    }
    await cart.save();
    res.status(200).send({ msg: "Cart quantity decrement done", data: cart });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addcartController,
  getSingleUserCartController,
  cartproductDeleteController,
  cartproductIncrementController,
  cartproductDecrementController
};
