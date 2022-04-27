import { useEffect, useState } from "react";
import { fetchProducts, fetchUserMe } from "./api";
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
        </Routes>
    </>)
}

export default App;