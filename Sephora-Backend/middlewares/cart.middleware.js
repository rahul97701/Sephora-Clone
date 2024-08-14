    const ProductModel = require("../models/product.model");

    const cart = async (req, res, next) => {

        try {
            req.body.productId = productId
            next();
        } catch (error) {
            resizeTo.status(500).send({ message: error.message });
        }
    };

    module.exports = cart;
