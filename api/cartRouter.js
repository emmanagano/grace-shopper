const express = require("express");
const { addToCart, updateQty } = require("../db/cart_products");
const cartRouter = express.Router();

cartRouter.post("/add", async(req, res) => {
    const {cartPrice, productId, quantity} = req.body;
    try {
        const cartProduct = await addToCart({
            cartId: req.user.cart.id,
            cartPrice,
            productId,
            quantity
        });
        res.send(cartProduct);
    } catch (error) {
        res.send("Error adding product to cart")
    }
});

cartRouter.patch("/quantity", async(req, res) => {
    const {productId, quantity} = req.body;
    try {
        const product = await updateQty({
            cartId: req.user.cart.id,
            productId,
            quantity
        });
        res.send(product)
    } catch (error) {
        res.send("Error updating quantity");
    }
});

module.exports = cartRouter;