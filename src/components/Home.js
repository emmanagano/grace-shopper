import { useState } from "react";
import Categories from "./Categories";
import Login from "./Login";
import Navbar from "./Navbar";
import {GrClose} from "react-icons/gr"
import Register from "./Register";

const Home = ({setUser}) => {
    const [toggle, setToggle] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false)
    const [toggleRegister, setToggleRegister] = useState(false)
    return (
        <div className="home_main">
            <Navbar 
                setToggle={setToggle}
                toggle={toggle}
                toggleLogin={toggleLogin}
                setToggleLogin={setToggleLogin}
            />
            <div>
                {toggle && <Categories />}
            </div>
            {toggleLogin && 
                <div className="login-register">
                    <div className="login_content">
                        <span className="login_close">
                            <GrClose 
                                onClick={() => {
                                    setToggleLogin(false)
                                }}
                            />
                        </span>
                        <span className="login_options">
                            <button
                                value={toggleRegister}
                                onClick={() => {
                                    setToggleRegister(false)
                                }}
                            >
                                <h1>
                                    Login
                                </h1>
                            </button>
                            <button
                                value={toggleRegister}
                                onClick={() => {
                                    setToggleRegister(!toggleRegister)
                                }}
                            >
                                <h1>
                                    Sign Up
                                </h1>
                            </button>
                        </span>
                        <span>
                            {!toggleRegister && <Login 
                                setUser={setUser}
                            />}
                            {toggleRegister && <Register />}
                        </span>
                    </div>
                </div>
            }
            <img src="https://cdn.shopify.com/s/files/1/0008/9748/2815/files/JULY00_14451826-42f1-4b76-b0ef-8ede2f16a627_1500x.jpg?v=1646911150" />
        </div>
    )
}

export default Home;