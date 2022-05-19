import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchProducts, fetchUserMe } from "./api";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Register from "./components/Register";

import "./css/App.css";

const App = () => {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const lstoken = localStorage.getItem("token");
    useEffect(()=>{
        if(lstoken) {
            fetchUserMe().then(user => {
                setUser(user)
            });
        };
        fetchProducts().then(product => {
            setProducts(product)
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
                    element={<Login />}
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
            </Routes>
        </div>
    )
};

export default App;