const express = require("express");
const { getProductReviewsByProductId } = require("../db/reviews");
const reviewsRouter = express.Router();

reviewsRouter.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const productId = Number(id);
    try {
        const productReviews = await getProductReviewsByProductId(productId);
        res.send({ productReviews });
    } catch (error) {
        res.send({
            error: error.message,
        });
    }
});

module.exports = reviewsRouter;