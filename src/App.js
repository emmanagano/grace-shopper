import { useEffect, useState } from "react";
import { fetchUserMe } from "./api";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const { Routes, Route } = require("react-router-dom")

const App = () => {
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        fetchUserMe()
        .then(user => {
            setUser(user);
        });
    },[]);
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
        </Routes>
    </>)
}

export default App;