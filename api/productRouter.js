const express = require("express");
const { getProducts } = require("../db/product");
const productRouter = express.Router();

productRouter.get('/', async (req, res, next) => {
    try {
        const products = await getProducts();
        res.send({ products });
    } catch (error) {
        res.send({
            error: error.message,
        });
    }
});

module.exports = productRouter;