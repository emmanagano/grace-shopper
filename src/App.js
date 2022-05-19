import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

import "./css/App.css";

const App = () => {
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