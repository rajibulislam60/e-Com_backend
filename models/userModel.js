const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is require"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    phone: {
      type: Number,
      required: [true, "number name is require"],
    },
    password: {
      type: String,
      required: [true, "password is require"],
    },
    address: {
      type: Array,
    },
    usertype: {
      type: String,
      default: "client",
      enum: ["client", "admin", "employ"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
