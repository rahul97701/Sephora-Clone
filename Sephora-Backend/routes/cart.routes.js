const express = require("express");
const userAuth = require("../middlewares/auth.middleware");
const addToCart = require("../controllers/CartRequest/addToCart.controller");
const getCartItems = require("../controllers/CartRequest/getCartItems.controller");
const removeFromCart = require("../controllers/CartRequest/removeFromCart.controller");
const cart = require("../middlewares/cart.middleware");
const cartRouter = express.Router();

cartRouter.get("/", userAuth, getCartItems);
cartRouter.post("/add/:productId", userAuth, cart, addToCart);
cartRouter.delete("/remove/:productId", userAuth, removeFromCart);

module.exports = cartRouter;