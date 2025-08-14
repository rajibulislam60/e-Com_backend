const orderModel = require("../models/orderModel");

const addorderController = async (req, res) => {
  try {
    let {
      phone,
      city,
      address,
      paymentmethod,
      paymentStatus,
      quantity,
      productid,
      cartItems,
      totalprice,
      user,
    } = req.body;

    if (!phone || !city || !address || !paymentmethod || !totalprice || !user) {
      return res.status(400).json({
        success: false,
        msg: "Please fill all required fields",
      });
    }

    if (paymentmethod == "COD") {
      let order = new orderModel({
        phone,
        city,
        address,
        paymentmethod,
        paymentStatus: paymentStatus || "Pending",
        quantity,
        productid,
        cartItems,
        totalprice,
        user,
      });
      await order.save();
      res.status(201).json({
        success: true,
        msg: "Order placed Successful",
        data: order,
      });
    } else {
      return res.status(400).json({
        success: false,
        msg: "Currently only COD is supported",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      total: orders.length,
      data: orders,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleOrderController = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderModel.findById(id);
    if (!order) {
      return res.status(404).json({
        success: false,
        msg: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addorderController,
  getAllOrdersController,
  getSingleOrderController,
};
