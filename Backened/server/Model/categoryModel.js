const mongoose = require("mongoose");

//create Schema
const categorySchema = new mongoose.Schema({
  type: String,
  image: String,
});

//create model
const Category = mongoose.model("Category", categorySchema);
module.exports.Category = Category;
