import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const { Routes, Route } = require("react-router-dom")

const App = () => {
    const [user, setUser] = useState({});
    return (<>
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