const express = require("express");
const { createProduct, getProducts, updateProduct, deleteProduct, getProductById } = require("../db/product");
const productRouter = express.Router();

productRouter.post("/", async(req, res) => {
    try {
        const product = await createProduct(req.body);
        res.send(product);
    } catch (error) {
        res.send("Error posting the product")
    }
});

productRouter.get("/", async(req, res) => {
    try {
        const products = await getProducts();
        res.send(products);
    } catch (error) {
        res.send("Error getting the products")
    }
});

productRouter.get("/:id", async(req, res) => {
    try {
        const product = await getProductById(req.params);
        res.send(product)
    } catch (error) {
        res.send("Error getting the products")
    }
});

productRouter.patch("/:id", async(req, res) => {
    const {id} = req.params;
    const { 
        title, 
        price, 
        category, 
        description, 
        inventory 
    } = req.body;

    try {
        const product = await updateProduct({ 
            id, 
            title, 
            price, 
            category, 
            description, 
            inventory 
        });
        res.send(product);
    } catch (error) {
        res.send("Error updating product");
    }
});

productRouter.delete("/:id", async(req, res) => {
    try {
        const product = await deleteProduct({id:req.params.id});
        if(!product) {
            res.send({message: "Product Deleted"})
        }
    } catch (error) {
        res.send("Error deleting product")
    }
});

module.exports = productRouter;