const express = require("express");
const { getProducts, getProductById } = require("../db/product");
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    try {
        const products = await getProducts();
        res.send({ products });
    } catch (error) {
        res.send({
            error: error.message,
        });
    }
});

productRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getProductById(id);
        res.send({ product });
    } catch (error) {
        res.send({
            error: error.message,
        });
    }
});
module.exports = productRouter;