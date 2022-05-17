const { client } = require("./client");
const bcrypt = require("bcrypt");

async function createUser ({
    username,
    email,
    password,
    isAdmin
}) {
    const SALT_COUNT = 10;
    const hashePassword = await bcrypt.hash(password, SALT_COUNT);
    try {
        const {rows: [user]} = await client.query(`
            INSERT INTO users (
                username,
                email,
                password,
                "isAdmin"
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `,[username, email, hashePassword, isAdmin]);
        return user
    } catch (error) {
        throw error;
    }
};

async function getUserByUsername ({username}) {
    try {
        const {rows: [user]} = await client.query(`
            SELECT *
            FROM users
            WHERE username = $1
        `,[username]);
        return user;
    } catch (error) {
        throw error;
    }
};

async function getUserByEmail ({email}) {
    try {
        const {rows: [user]} = await client.query(`
            SELECT  *
            FROM users
            WHERE email = $1
        `,[email]);
        return user;
    } catch (error) {
        throw error;
    }
};

async function checkIfUserExists ({username, email}) {
    try {
        const byUsername = await getUserByUsername({username});
        const byUserEmail = await getUserByEmail({email});
        if (byUsername) {
            return true;
        } else if (byUserEmail) {
            return true;
        } else if (byUsername && byUserEmail) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

async function getUser ({username, password}) {
    try {
        const user = await getUserByUsername({username});
        const hashePassword = user.password;
        const passwordMatch = await bcrypt.compare(password, hashePassword);
        if(passwordMatch) {
            delete user.password;
            return user;
        }
    } catch (error) {
        throw error;
    }
};


module.exports = {
    createUser,
    getUser,
    getUserByUsername,
    checkIfUserExists
}