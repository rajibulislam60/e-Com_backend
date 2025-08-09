const productModel = require("../models/productModel");

const createProductsController = async (req, res) => {
  try {
    const {
      name,
      description,
      sellingPrice,
      discountPrice = 0,
      stock,
      category,
      isFeature = false,
    } = req.body;

    if (!name || !description || !sellingPrice || !stock || !category) {
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });
    }

    const images =
      req.files?.map((item) => process.env.HOST_URL + item.filename) || [];

    const product = new productModel({
      name,
      description,
      sellingPrice,
      discountPrice,
      stock,
      category,
      image: images,
      isFeature,
    });

    await product.save();

    res.status(200).send({
      success: true,
      message: "Product add successfully.",
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createProductsController };
