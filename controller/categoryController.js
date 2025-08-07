const path = require("path");
const categoryModel = require("../models/categoryModel");
const fs = require("fs");

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

const deleteCategoryController = async (req, res) => {
  let { id } = req.params;
  try {
    let category = await categoryModel.findOneAndDelete({ _id: id });

    let imagepath = category.image.split("/");
    let oldimagepath = imagepath[imagepath.length - 1];
    fs.unlink(
      `${path.join(__dirname, "../uploads")}/${oldimagepath}`,
      (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            msg: `${err.message ? err.message : "Internal image server error"}`,
            err,
          });
        } else {
          res.send("image deleted");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategoryController, deleteCategoryController };
