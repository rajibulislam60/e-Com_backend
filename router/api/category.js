const express = require("express");
const multer = require("multer");

const {
  createCategoryController,
  deleteCategoryController,
  updateCategoryController,
  allCategoryController,
} = require("../../controller/categoryController");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extention = file.originalname.split(".");
    cb(
      null,
      file.fieldname + "-" + uniqueName + `.${extention[extention.length - 1]}`
    );
  },
});

function errCheck(err, req, res, next) {
  if (err) {
    return res.status(500).send({ success: false, msg: err.massage });
  }
  next();
}

const upload = multer({ storage: storage });

router.post(
  "/createCategory",
  upload.single("image"),
  errCheck,
  createCategoryController
);

router.delete("/deleteCategory/:id", deleteCategoryController);

router.patch(
  "/updateCategory/:id",
  upload.single("image"),
  updateCategoryController
);

router.get("/allCategory", allCategoryController);

module.exports = router;
