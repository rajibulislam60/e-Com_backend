const categoryModel = require("../models/categoryModel");

const createCategoryController = async (req, res) => {
  let { name, description } = req.body;

  if (!req.file) {
    return res
      .status(400)
      .send({ success: false, msg: "Image file is required" });
  }

  try {
    let category = new categoryModel({
      name,
      description,
      image: process.env.HOST_URL + req.file.filename,
    });

    await category.save();
    res
      .status(201)
      .send({ success: true, msg: "Category created successfully" });
  } catch (err) {
    console.error("Error creating category:", err);
    res.status(500).send({
      success: false,
      msg: "Internal server error",
      error: err.message,
    });
  }
};

module.exports = { createCategoryController };
