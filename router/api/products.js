const express = require("express");
const multer = require("multer");

const {
  createProductsController,
} = require("../../controller/productController");
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
  "/createProducts",
  upload.single("image"),
  errCheck,
  createProductsController
);

module.exports = router;
