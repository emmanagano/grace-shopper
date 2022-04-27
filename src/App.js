import { useEffect, useState } from "react";
import { fetchProducts, fetchUserMe } from "./api";
import Accessories from "./components/categories/Accessories";
import Kids from "./components/categories/Kids";
import Men from "./components/categories/Men";
import Women from "./components/categories/Women";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Register from "./components/Register";

const { Routes, Route } = require("react-router-dom")

const App = () => {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetchUserMe()
        .then(user => {
            setUser(user);
        });
        fetchProducts()
        .then((product) => {
            setProducts(product);
        });
    },[]);
    console.log(products);
    return (<>
        <Navbar 
            setUser={setUser}
            user={user}
        />
        <Routes>
            <Route 
                path="/" 
                element={
                    <Home 
                        user={user}
                    />
                } 
            />
            <Route 
                path="/register" 
                element={
                    <Register/>
                } 
            />
            <Route
                path="/login"
                element={
                    <Login 
                        setUser={setUser}
                    />
                }
            />
            <Route 
                path="/products" 
                element={
                    <Products 
                        products={products} 
                    />
                } 
            />
            <Route
                path="/categories/women"
                element={
                    <Women 
                        products={products} 
                    />
                }
            />
            <Route 
                path="/categories/men" 
                element={
                    <Men 
                        products={products} 
                    />
                } 
            />
            <Route 
                path="/categories/kids" 
                element={
                    <Kids 
                        products={products} 
                    />
                } 
            />
            <Route
                path="/categories/accessories"
                element={
                    <Accessories 
                        products={products} 
                    />
                }
            />
        </Routes>
    </>)
}

export default App;