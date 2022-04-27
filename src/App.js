import { useState } from "react";
import Home from "./components/Home";
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
                    <Register 
                        setUser={setUser}
                    />
                } 
            />
        </Routes>
    </>)
}

export default App;