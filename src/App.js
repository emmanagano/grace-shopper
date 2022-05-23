import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchCart, fetchProducts, fetchUserMe } from "./api";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Register from "./components/Register";
import SingleProduct from "./components/SingleProduct";

import "./css/App.css";

const App = () => {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetchUserMe().then(user => {
            setUser(user)
        });
        fetchProducts().then(product => {
            setProducts(product)
        });
        fetchCart().then(cart => {
            setCart(cart)
        });
    },[]);
    console.log(user);
    return (
        <div className="app_main">
            <Navbar 
                setUser={setUser}
            />
            <Routes>
                <Route
                    path="/login"
                    element={<Login 
                        setUser={setUser}
                    />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/products"
                    element={<Products 
                        products={products}
                    />}
                />
                <Route
                    path="/cart"
                    element={<Cart 
                        cart={cart}
                        setCart={setCart}
                    />}
                />
                <Route 
                    path="/product/:id"
                    element={<SingleProduct />}
                />
            </Routes>
        </div>
    )
};

export default App;