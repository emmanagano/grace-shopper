const express = require("express");
const { addToCart } = require("../db/cart_products");
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

module.exports = cartRouter;