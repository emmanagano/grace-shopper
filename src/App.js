import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

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
            </Routes>
        </div>
    )
};

export default App;