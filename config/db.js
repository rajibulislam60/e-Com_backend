const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log("DataBase is Connect");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
