const { client } = require("./client");

const createProduct = async ({
    title,
    price,
    category,
    description,
    inventory,
    imgURL,
}) => {
    try {
        const { rows: newProduct } = await client.query(`
            INSERT INTO products(title, price, category, description, inventory, "imgURL")
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `,[title, price, category.toLowerCase(), description, inventory, imgURL]
        );
        return newProduct;
    } catch (error) {
        throw error;
    }
};

const getProducts = async () => {
    try {
        const { rows: products } = await client.query(`
            SELECT * FROM products;
        `);
        return products;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createProduct,
    getProducts
}