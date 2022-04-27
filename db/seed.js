const { client } = require('./client');
const { createUser, getUserByUsername, getUser } = require('./user');
const productData = require("./productData");
const { createProduct, getProducts } = require('./product');
const { createReview } = require('./reviews');

async function dropTables() {
    try {
        console.log("Starting to drop tables")
        await client.query(`
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS users;
        `);

        console.log('Finished dropping tables!');
    } catch (error) {
        throw error;
    }
};

async function createTables() {
    try {
        console.log('Starting to build tables...');

        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                "isAdmin" BOOLEAN DEFAULT false
            );
            CREATE TABLE products (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                price INTEGER,
                category VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                inventory INTEGER,
                "imgURL" TEXT NOT NULL
            );
            CREATE TABLE reviews (
                id SERIAL PRIMARY KEY,
                "creatorId" INTEGER REFERENCES users(id),
                "productId" INTEGER REFERENCES products(id),
                message TEXT NOT NULL
            );
        `);
        console.log('Finished building tables!');
    } catch (error) {
        console.error('Error building tables!');
        throw error;
    }
};

async function createInitialUsers() {
    try {
        console.log('Starting to create users...');
        await createUser({
            email: 'albert@gmail.com',
            username: 'albert',
            password: 'bertie99',
            isAdmin: false,
        });
        await createUser({
            email: 'sandra@gmail.com',
            username: 'sandra',
            password: '2sandy4me',
            isAdmin: false,
        });
        await createUser({
            email: 'glamgal@gmail.com',
            username: 'glamgal',
            password: 'soglam',
            isAdmin: false,
        });
        await createUser({
            email: 'jacob.admin@gmail.com',
            username: 'jacob.admin',
            password: 'jacob.admin',
            isAdmin: true,
        });
        await createUser({
            email: 'emma.admin@gmail.com',
            username: 'emma.admin',
            password: 'emma.admin',
            isAdmin: true,
        });
        await createUser({
            email: 'carmen.admin@gmail.com',
            username: 'carmen.admin',
            password: 'carmen.admin',
            isAdmin: true,
        });
        console.log('Finished creating users!');
    } catch (error) {
        console.error('Error creating users!');
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

async function createInitialReviews() {
    try {
        console.log('Starting to create reviews');
        await createReview({
            creatorId: 1,
            productId: 4,
            message: 'This is nice and the size is accurate',
        });
        await createReview({
            creatorId: 2,
            productId: 5,
            message: 'I love the fabric of this clothing!',
        });
        await createReview({
            creatorId: 3,
            productId: 6,
            message: 'This shirt is really soft. I wear it the moment it gets out of the dryer!',
        });
        await createReview({
            creatorId: 3,
            productId: 2,
            message: 'This ring fits really well! The quality is amazing and I love the details.',
        });
        await createReview({
            creatorId: 2,
            productId: 1,
            message: 'I gave this as a gift and she told me that everyone notices it!',
        });
        await createReview({
            creatorId: 1,
            productId: 3,
            message: 'I was gonna give this as a promise ring to my girl, but she dumped me. Their refund service is very helpful!',
        });
        console.log('Finished creating reviews!');
    } catch (error) {
        throw error;
    }
};

async function testDB() {
    try {
        console.log('Starting to test database...');

        // const allUsers = await getAllUsers();
        // console.log('getAllUsers', allUsers);

        // const userByUsername = await getUserByUsername({username:'albert'});
        // console.log('getUserByUsername', userByUsername);

        // const user = await getUser({ username: 'albert', password: 'bertie99' });
        // console.log('here are users', user);

        // const deletedProduct = await destroyProduct(4);
        // console.log('destroyProduct', deletedProduct);

        // const products = await getProducts();
        // console.log('getProducts', products);

        // const productReviews = await getProductReviews();
        // console.log('product reviews', productReviews);

        // const productReviewsByProductId = await getProductReviewsByProductId(1);
        // console.log('productReviewsByProductId', productReviewsByProductId);

        // const editedReview = await editReview({
        //   id: 1,
        //   message: 'Updated Review: size is not accurate',
        // });
        // console.log('edited review: 1', editedReview);

        // const reviews = await getAllReviews();
        // console.log('here are the reviews', reviews);

        // const newCart = await createCart(1);
        // console.log('createCart', newCart);

        // const cartByUserID = await getCartByUserId(1);
        // console.log('cartByUserId', cartByUserID);

        // const cartProduct = await addProductToCart(1, 40, 1, 1);
        // console.log('addProductToCart', cartProduct);

        // const cartProducts = await getCartProducts();
        // console.log('getCartProducts', cartProducts);

        // const cartById = await getCartById(1);
        // console.log('getCartById', cartById);

        // console.log('Finished testing database!');

        // await purchaseCart(1);
        // await deleteProductFromCart(1, 1);
        // await editCount(5, 1, 2);

        console.log('Finished testing database!');
    } catch (error) {
        console.error('Error testing database!');
        throw error;
    }
};

async function rebuildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialProducts();
        await createInitialReviews();
        // await createInitialCarts();
        // await createInitialCartProducts();s
    } catch (error) {
        throw error;
    }
};

rebuildDB()
    .then(testDB)
    .catch(console.error)
    .finally(() => client.end());
