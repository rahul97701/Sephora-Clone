const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb://localhost:27017/" + "sephora");

module.exports = connection;