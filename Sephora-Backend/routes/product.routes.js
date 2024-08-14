const express = require("express");
const productCreate = require("../controllers/ProductRequest/product-create.controller");
const productGet = require("../controllers/ProductRequest/product-get.controller");
const productCategories = require("../controllers/ProductRequest/product-getCategories.controller");
const productSingleProduct = require("../controllers/ProductRequest/product-getSIngleProduct.controller");
const productRouter = express.Router();

productRouter.get("/", productGet);
productRouter.get("/categories", productCategories);
productRouter.get("/:id", productSingleProduct);
productRouter.post("/", productCreate);

module.exports = productRouter;