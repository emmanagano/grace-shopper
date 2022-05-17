const { client } = require("./client")

async function createCart ({userId}) {
    try {
        const {rows: [cart]} = await client.query(`
            INSERT INTO cart ("userId")
            VALUES ($1)
            RETURNING *;
        `,[userId]);
        return cart;
    } catch (error) {
        throw error;
    }
};

async function getCartByUser ({id}) {
    try {
        const {rows: [cart]} = await client.query(`
            SELECT * 
            FROM cart
            WHERE "userId" = $1;
        `,[id])
        return cart;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCart,
    getCartByUser
}