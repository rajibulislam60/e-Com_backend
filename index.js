const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const router = require("./router");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.use(router);

app.listen(PORT, () => {
  console.log(`server is working ${PORT}`);
});
