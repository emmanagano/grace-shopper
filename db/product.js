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

const getProductById = async (id) => {
    try {
        const { rows: product } = await client.query(`
            SELECT * FROM products
            WHERE id = $1
        `,[id]
        );
        return product;
    } catch (error) {
        throw error;
    }
};

// const getProductsByCartId = async (cartId) => {
//     try {
//         const { rows: products } = await client.query(`
//             SELECT products.*, carts_products.price, carts_products.id, carts_products.count
//             FROM products
//             JOIN carts_products 
//             ON products.id = carts_products."productId"
//             WHERE "cartId" = $1;
//         `[cartId])
//         console.log(products,"getProductsByCartId")
//         return products;
//     } catch (error) {
//         throw error;
//     }
// };

module.exports = {
    createProduct,
    getProducts,
    getProductById,
}