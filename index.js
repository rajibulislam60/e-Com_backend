const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const router = require("./router");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(router);

app.listen(PORT, () => {
  console.log(`server is working ${PORT}`);
});
