const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./Routes/categoryRoutes.js");
const cors = require("cors");
const app = express();
const PORT = 6000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use("/", productRoutes);
//create mongodb connection
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/categories")
  .then(() => {
    console.log("Mongodb is connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
//create server
app.listen(PORT, (req, res) => {
  console.log(`Server is running on the http://localhost:${PORT} successfully`);
});
