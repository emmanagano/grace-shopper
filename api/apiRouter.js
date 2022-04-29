require('dotenv').config();
const express = require("express");
// const cartsRouter = require("./cartsRouter");
// const productRouter = require("./productRouter");
// const reviewsRouter = require("./reviewsRouter");
// const userRouter = require("./userRouter");

const apiRouter = express.Router();

const jwt = require('jsonwebtoken');
const { getCartByUserId } = require('../db/cart');
const { getUserByUsername } = require("../db/user");
const cartRouter = require('./cartRouter');
const productRouter = require('./productRouter');
const reviewsRouter = require('./reviewsRouter');
const userRouter = require("./userRouter");

apiRouter.use(async (req, res, next) => {
	if (!req.headers.authorization) {
		return next();
	};
	const auth = req.headers.authorization.split(" ")[1];
	const _user = jwt.decode(auth, process.env.SECRET_KEY);
	if (!_user) {
		return next();
	}

	const user = await getUserByUsername(_user.username);
	req.user = user;
	console.log(req.user)
	next();
});


apiRouter.use("/products", productRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/reviews", reviewsRouter);
apiRouter.use("/cart", cartRouter);


apiRouter.get("/", (req, res) => {
	res.send("api router working");
});

module.exports = apiRouter;
