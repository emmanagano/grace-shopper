const { client } = require("./client");
const { getProducts } = require("./product");

const createReview = async({creatorId, productId, message}) => {
    try {
        const {rows: review} = await client.query(`
            INSERT INTO reviews ("creatorId", "productId", message)
            VALUES ($1, $2, $3)
            RETURNING *;
        `,[creatorId, productId, message]);
        return review;
    } catch (error) {
        throw error;
    }
};

const getProductReviews = async() => {
    const allProducts = await getProducts();
    try {
        for(const product of allProducts) {
            const {rows: reviews} = await client.query(`
                SELECT reviews.*
                FROM products
                JOIN reviews
                ON products.id = reviews."productId"
                WHERE products.id = $1;
            `,[product.id]);
            product.reviews = reviews;
        };
        return allProducts;
    } catch (error) {
        throw error;
    }
};

const getProductReviewsByProductId = async(id) => {
    try {
        const products = await getProductReviews();
        const filteredProducts = products.filter(product => {
            if(product.id === id) {
                return true;
            }
        });
        return filteredProducts;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createReview,
    getProductReviewsByProductId
}
