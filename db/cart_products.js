const { getCartByUser } = require("./cart");
const { client } = require("./client");

async function addToCart ({
    cartId,
    cartPrice,
    productId,
    quantity
}) {
    try {
        const {rows: [cart_product]} = await client.query(`
            INSERT INTO cart_products (
                "cartId",
                "cartPrice",
                "productId",
                quantity
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `,[cartId, cartPrice, productId, quantity]);
        return cart_product;
    } catch (error) {
        throw error;
    }
};

async function getCartProductsByCartId ({cartId}) {
    try {
        const {rows: cart_products} = await client.query(`
            SELECT *
            FROM cart_products
            WHERE "cartId" = $1;
        `,[cartId]);
        return cart_products;
    } catch (error) {
        throw error;
    }
}

async function getCartProducts ({userId}) {
    try {
        const cart = await getCartByUser({id: userId});
        const {rows: cart_products} = await client.query(`
            SELECT cart_products.*
            FROM cart
            JOIN cart_products
            ON cart.id = cart_products."cartId"
            WHERE cart.id = $1;
        `,[cart.id]);
        for(const product of cart_products) {
            const {rows: [item]} = await client.query(`
                SELECT products.*
                FROM cart_products
                JOIN products
                ON cart_products."productId" = products.id
                WHERE cart_products."productId" = $1
            `,[product.productId]);
            product.item = item;
        }
        return cart_products;
    } catch (error) {
        throw error;
    }
};

async function updateQty ({productId, quantity}) {
    try {
        if(quantity) {
            client.query(`
                UPDATE cart_products
                SET quantity = $2
                WHERE "productId" = $1;
            `,[productId, quantity])
        }
        const {rows: [product]} = await client.query(`
            SELECT *
            FROM cart_products
            WHERE "productId" = $1
        `,[productId]);
        return product;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addToCart,
    getCartProducts,
    getCartProductsByCartId,
    updateQty
}