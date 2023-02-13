const express = require("express");
const {
  postProduct,
  getProduct,
} = require("../Contollers/categoryController.js");
const productRoutes = express.Router();

productRoutes.route("/api/products").post(postProduct);
productRoutes.route("/api/products").get(getProduct);

module.exports = productRoutes;
