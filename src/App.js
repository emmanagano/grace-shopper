import React, { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { fetchProducts, fetchUser } from './api';
import { createCart } from './api';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Register from './components/Register';
import SingleProduct from './components/SingleProduct';
import Women from './components/categories/Women';
import Men from './components/categories/Men';
import Kids from './components/categories/Kids';
import Accessories from './components/categories/Accessories';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Checkout from './components/Checkout';
import Admin from './components/Admin';
import CreateAdmin from './components/CreateAdmin';
import CreateProducts from './components/CreateProducts';
import ReadAdminTable from './components/ReadAdminTable';
import ReadProductTable from './components/ReadProductTable';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      console.log(user);
      if (user) {
        setUserInfo(user);
      }
    };
    getUser();
    createCart();
    const lstoken = localStorage.getItem('token');
    setToken(lstoken);
    fetchProducts().then((product) => {
      setProducts(product);
    });
  }, []);
  return (
    <>
      <Navbar setUserInfo={setUserInfo} userInfo={userInfo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} token={token} />}
        />
        <Route
          path="/categories/women"
          element={<Women products={products} token={token} />}
        />
        <Route
          path="/categories/men"
          element={<Men products={products} token={token} />}
        />
        <Route
          path="/categories/kids"
          element={<Kids products={products} token={token} />}
        />
        <Route
          path="/categories/accessories"
          element={<Accessories products={products} />}
        />
        <Route path="products/:id" element={<SingleProduct token={token} />} />
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              setCheckoutProducts={setCheckoutProducts}
              setTotal={setTotal}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              checkoutProducts={checkoutProducts}
              total={total}
              cartProducts={cartProducts}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/admin/createAdmin"
          element={<CreateAdmin token={token} />}
        />
        <Route
          path="/admin/createProduct"
          element={
            <CreateProducts
              products={products}
              setProducts={setProducts}
              token={token}
            />
          }
        />
      </Routes>
      <NotificationContainer />
    </>
  );
};

export default App;
