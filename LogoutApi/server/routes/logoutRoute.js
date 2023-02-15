const express = require("express");
const {Logout} =require("../controller/logoutController.js");

const logout = express.Router();
logout.route("/logout").get(Logout);

module.exports = logout;
