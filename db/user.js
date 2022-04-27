const bcrypt = require('bcrypt');
const { client } = require('../db/client');

const createUser = async ({ email, username, password, isAdmin }) => {
    const SALT_COUNT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    try {
        const { rows: user } = await client.query(
        `
            INSERT INTO users (email, username, password, "isAdmin")
            VALUES ($1, $2, $3, $4)
            RETURNING id, email, username;


            `,
        [email, username, hashedPassword, isAdmin]
        );

        return user;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    createUser
}