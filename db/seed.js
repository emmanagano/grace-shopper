const { createCart, getCartByUser } = require("./cart");
const { addToCart, getCartProducts } = require("./cart_products");
const { client } = require("./client");
const { createProduct, getProducts } = require("./product");
const productData = require("./productData");
const { createUser, getUser } = require("./user");

async function dropTables () {
    try {
        await client.query(`
            DROP TABLE IF EXISTS cart_products;
            DROP TABLE IF EXISTS cart;
            DROP TABLE IF EXISTS products CASCADE;
            DROP TABLE IF EXISTS users;
        `);
    } catch (error) {
        throw error;
    }
};

async function createTables () {
    try {
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                "isAdmin" BOOLEAN DEFAULT false,
                UNIQUE(email, username)
            );
            CREATE TABLE products (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                price FLOAT NOT NULL,
                category VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                inventory INTEGER NOT NULL,
                "imgURL" TEXT NOT NULL
            );
            CREATE TABLE cart (
                id SERIAL PRIMARY KEY,
                "userId" INTEGER REFERENCES users(id),
                "isPurchased" BOOLEAN DEFAULT false
            );
            CREATE TABLE cart_products (
                id SERIAL PRIMARY KEY,
                "cartId" INTEGER REFERENCES cart(id),
                "cartPrice" FLOAT NOT NULL,
                "productId" INTEGER REFERENCES products(id),
                quantity INTEGER NOT NULL
            );
        `);
    } catch (error) {
        throw error;
    }
};

async function createInitialUsers () {
    try {
        await createUser({
            username: "emma99",
            email: "emma@gmail.com",
            password: "123456",
            isAdmin: true
        })
    } catch (error) {
        throw error;
    }
};

async function createInitialProducts () {
    try {
        for(const product of productData) {
            await createProduct({
                title: product.title,
                price: product.price,
                category: product.category,
                description: product.description,
                inventory: product.inventory,
                imgURL: product.imgURL
            })
        }
    } catch (error) {
        throw error;
    }
};

async function createInitialCart () {
    try {
        await createCart({
            userId: 1
        })
    } catch (error) {
        throw error;
    }
};

async function createInitialCartProducts () {
    try {
        await addToCart({
            cartId: 1,
            cartPrice: 56.78,
            productId: 2,
            quantity: 2
        })
        await addToCart({
            cartId: 1,
            cartPrice: 99,
            productId: 3,
            quantity: 5
        })
    } catch (error) {
        throw error;
    }
};

async function testDB () {
    try {
        // const user = await getUser({username:"emma99", password: "123456"});
        // console.log(user);
        // const products = await getProducts();
        // console.log(products);
        // const cart = await getCartByUser({id:1});
        // // console.log(cart);
        // const addCart = await addToCart({
        //     cartId: cart.id,
        //     cartPrice: 66.78,
        //     productId: 1,
        //     quantity: 10
        // });
        // // console.log(addCart);
        // const products = await getCartProducts({userId: 1});
        // console.log(products,"cartProducts");
    } catch (error) {
        throw error;
    }
};

async function rebuildDB () {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialProducts();
        // await createInitialCart();
        // await createInitialCartProducts();
    } catch (error) {
        throw error;
    }
};

rebuildDB()
    .then(testDB)
    .catch(console.error)
    .finally(() => client.end());