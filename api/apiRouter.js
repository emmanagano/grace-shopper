require('dotenv').config();
const express = require("express");
// const cartsRouter = require("./cartsRouter");
// const productRouter = require("./productRouter");
// const reviewsRouter = require("./reviewsRouter");
const userRouter = require("./userRouter");

const apiRouter = express.Router();

const jwt = require('jsonwebtoken');
const { getUserByUsername } = require('../db/user');
const productRouter = require('./productRouter');
const { getCartByUser, createCart } = require('../db/cart');
const { getCartProducts } = require('../db/cart_products');
const cartRouter = require('./cartRouter');

apiRouter.use("/", async(req, res, next) => {
	if(req.headers.authorization) {
		const auth = req.headers.authorization.split(" ")[1];
		const _user = jwt.decode(auth, process.env.SECRET_KEY);
		const user = await getUserByUsername({username: _user.username});
		req.user = user;
	};
	if(req.user) {
		const cart = await getCartByUser({id: req.user.id});
		if(!cart) {
			await createCart({userId: req.user.id});
		};
		req.user.cart = cart;
		const cartProducts = await getCartProducts({userId: req.user.id});
		if([cartProducts]) {
			req.user.cart.items = cartProducts;
		}
	};
	next();
});

// const cartRouter = require('./cartRouter');
// const productRouter = require('./productRouter');
// const reviewsRouter = require('./reviewsRouter');
// const userRouter = require("./userRouter");


apiRouter.use("/products", productRouter);
apiRouter.use("/user", userRouter);
// apiRouter.use("/reviews", reviewsRouter);
apiRouter.use("/cart", cartRouter);

app.use(express.static("build"));

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
});

apiRouter.get("/", (req, res) => {
	res.send("api router working");
});

module.exports = apiRouter;
