const { client } = require("./client");

async function createProduct ({
    title,
    price,
    category,
    description,
    inventory,
    imgURL,
    subImg
}) {
    try {
        const {rows: [product]} = await client.query(`
            INSERT INTO products (
                title,
                price,
                category,
                description,
                inventory,
                "imgURL",
                "subImg"
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `,[title, price, category, description, inventory, imgURL, subImg]);
        return product;
    } catch (error) {
        throw error;
    }
};

async function getProducts () {
    try {
        const {rows: products} = await client.query(`
            SELECT *
            FROM products
        `);
        return products;
    } catch (error) {
        throw error;
    }
};

async function getProductById ({id}) {
    try {
        const {rows: [product]} = await client.query(`
            SELECT *
            FROM products
            WHERE id = $1
        `,[id]);
        return product;
    } catch (error) {
        throw error;
    }
};

async function updateProduct ({
    id,
    title,
    price,
    category,
    description,
    inventory,
    imgURL
}) {
    try {
        if (title) {
            client.query(
                `
                UPDATE products
                SET title = $1
                WHERE id = $2;
            `,
                [title, id]
            );
        }
        if (price) {
            client.query(
                `
                UPDATE products
                SET price = $1
                WHERE id = $2;
            `,
                [price, id]
            );
        }
        if (category) {
            client.query(
                `
                UPDATE products
                SET category = $1
                WHERE id = $2;
            `,
                [category, id]
            );
        }
        if (description) {
            client.query(
                `
                UPDATE products
                SET description = $1
                WHERE id = $2;
            `,
                [description, id]
            );
        }
        if (inventory) {
            client.query(
                `
                UPDATE products
                SET inventory = $1
                WHERE id = $2;
            `,
                [inventory, id]
            );
        }
        if (imgURL) {
            client.query(
                `
                UPDATE products
                SET "imgURL" = $1
                WHERE id = $2;
            `,
                [imgURL, id]
            );
        }
        const {rows: [product]} = await client.query(`
            SELECT *
            FROM products
            WHERE id = $1
        `,[id]);
        return product;
    } catch (error) {
        throw error;
    }
};

async function deleteProduct ({id}) {
    try {
        const {rows: [product]} = await client.query(`
            DELETE 
            FROM products
            WHERE id = $1
            RETURNING *;
        `,[id]);
        return product;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}