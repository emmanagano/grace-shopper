const express = require('express');
const {
  createCart,
  getCartById,
  getCartByUserId,
  addProductToCart,
  getCartProducts,
  getCartProductsByUserId,
  editCount,
  deleteProductFromCart,
  purchaseCart,
} = require('../db/cart');
const { requireUser } = require('./utils');

const cartsRouter = express.Router();

cartsRouter.post('/', requireUser, async (req, res, next) => {
  const { id } = req.user;
  const { count, price, productId } = req.body;
  let found = false;
  try {
    const cart = await getCartProductsByUserId(id);
    for (const product of cart.products) {
      console.log(product);
      if (product.productId === productId) {
        found = true;
        const newcount = Number(product.count) + Number(count);
        const response = await editCount(
          newcount,
          product.cartId,
          product.productId
        );
        break;
      }
    }
    if (found) {
      res.send({
        name: 'Found Product',
        message: 'Found product and updated count',
      });
    } else {
      const cartProducts = await addProductToCart(
        count,
        price,
        cart.id,
        productId
      );
      res.send({
        cartProducts,
      });
    }
  } catch (error) {
    res.send({
      name: error.name,
      message: error.message,
    });
  }
});

cartsRouter.delete('/:id', requireUser, async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;
    const cart = await getCartByUserId(user.id);
    console.log(cart, id);
    const response = await deleteProductFromCart(cart.id, id);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
});

cartsRouter.get('/create', requireUser, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      console.error('No user logged in');
      return;
    }
    const cart = await getCartByUserId(user.id);
    console.log(cart);
    if (cart) {
      console.error('User already has a cart');
      res.send(cart);
      return;
    }
    const newCart = createCart(user.id);
    console.error('Created New Cart');
    res.send(newCart);
    return;
  } catch (error) {
    throw error;
  }
});

cartsRouter.patch('/purchase', requireUser, async (req, res) => {
  try {
    const user = req.user;
    const cart = await getCartByUserId(user.id);
    if (!cart) {
      return;
    }
    const purchase = await purchaseCart(cart.id);
    res.send(purchase);
    return;
  } catch (error) {
    throw error;
  }
});

cartsRouter.get('/', requireUser, async (req, res) => {
  try {
    console.log(req.user);
    const cart = await getCartProductsByUserId(req.user.id);
    console.log(cart);
    res.send({
      cart,
    });
  } catch (error) {
    console.log(error);
    res.send({
      name: error.name,
      message: error.message,
    });
  }
});

cartsRouter.patch('/:id', requireUser, async (req, res) => {
  try {
    const cart = await getCartProductsByUserId(req.user.id);
    const { id } = req.params;
    const { count } = req.body;
    const response = await editCount(count, cart.id, id);
    return response;
  } catch (error) {
    throw error;
  }
});

module.exports = cartsRouter;
