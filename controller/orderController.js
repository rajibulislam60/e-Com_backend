const addorderController = async (req, res) => {
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

  try {
    if (paymentmethod == "COD") {
      let order = new orderModel({
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
      });
      await order.save();
      res.status(201).json({
        success: true,
        msg: "Order Successful",
        data: order,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
