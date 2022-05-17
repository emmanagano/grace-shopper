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

async function getCartProducts ({userId}) {
    try {
        const cart = await getCartByUser({id: userId});
        const {rows: cart_products} = await client.query(`
            SELECT cart_products.*
            FROM cart
            JOIN cart_products
            ON cart.id = cart_products."cartId"
            WHERE cart.id = $1
        `,[cart.id]);
        console.log(cart_products,"cart_products");
        return cart_products;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addToCart,
    getCartProducts
}