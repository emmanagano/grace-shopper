import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchUserMe } from "./api";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

import "./css/App.css";

const App = () => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        fetchUserMe().then(user => {
            setUser(user)
        })
    },[]);
    console.log(user);
    return (
        <div className="app_main">
            <Navbar />
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
            </Routes>
        </div>
    )
};

export default App;