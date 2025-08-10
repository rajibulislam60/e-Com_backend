const path = require("path");
const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");
const fs = require("fs");

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

    const updateCategory = await categoryModel.findOneAndUpdate(
      {
        _id: category,
      },
      { $push: { products: product._id } },
      { new: true }
    );

    if (!updateCategory) {
      res.status(404).send({
        success: false,
        message: "Category is not found or update!",
      });
    }

    res.status(200).send({
      success: true,
      message: "Product add successfully.",
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProductController = async (req, res) => {
  let { id } = req.params;
  try {
    let deleteproduct = await productModel.findOneAndDelete({ _id: id });
    let imagepatharray = deleteproduct.image;

    imagepatharray.forEach((item) => {
      let imagepath = item.split("/");
      let oldimagepath = imagepath[imagepath.length - 1];
      fs.unlink(
        `${path.join(__dirname, "../uploads")}/${oldimagepath}`,
        (err) => {
          if (err) {
            console.error("Error deleting image:", err);
          }
        }
      );
    });
    return res.status(200).json({
      success: true,
      msg: "product deleted successfull",
      data: deleteproduct,
    });
  } catch (error) {
    console.log(error);
  }
};

const allProductsController = async (req, res) => {
  try {
    let allProducts = await productModel.find({});

    res.status(200).send({
      success: true,
      message: "All products fetch successfully.",
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

const singleProductController = async (req, res) => {
  let { id } = req.params;

  try {
    const singleProduct = await productModel.findById({ _id: id });
    res.status(200).send({
      success: true,
      message: "Single product fatch successfully.",
      data: singleProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

const byCategoryProductController = async (req, res) => {
  let { id } = req.params;

  try {
    const products = await productModel.find({ category: id });
    res.status(200).send({
      success: true,
      message: "By categroy products fatch successfully.",
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductsController,
  deleteProductController,
  allProductsController,
  singleProductController,
  byCategoryProductController,
};
