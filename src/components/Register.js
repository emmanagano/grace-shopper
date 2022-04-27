import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./css/Login.css";

const { fetchRegister } = require("../api");

const Register = ({setUser}) => {
    const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [error, setError] = useState("");
	const history = useNavigate();

    const handleRegister = async(event) => {
        event.preventDefault();
        if (password !== confirm) {
            setError("Confirm password does not match");
            return;
        }
        try {
            const info = await fetchRegister(email, username, password);
            if(info.error) {
                setError(info.message)
            }
            console.log(info);
            // localStorage.setItem("token", info.user.token);
			setEmail("");
			setUsername("");
			setPassword("");
			history("/");
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className="login_container">
            <div className="login_main">
                <form onSubmit={handleRegister}>
                    <h2>Thanks for joining!</h2>
                    <label>Email:</label>
                    <input
                        required
                        type="text"
                        placeholder="Enter email.. "
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <label>Username:</label>
                    <input
                        required
                        type="text"
                        placeholder="Enter username.."
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <label>Password:</label>
                    <input
                        required
                        type="password"
                        placeholder="Enter password.."
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    {password.length !== 0 && 
                        <>
                        <label>Confirm Password:</label>
                        <input
                            required
                            type="password"
                            // minLength="8"
                            placeholder="Confirm password.."
                            value={confirm}
                            onChange={(e) => {
                                setConfirm(e.target.value);
                            }}
                        />
                        </>
                    }
                    <button type="submit">Register</button>
                    <p>
                        Already have an account?
                        {/* <Link to="/login">
                            Log in
                        </Link> */}
                    </p>
                </form>
                {error && <p> {error}!</p>}
        </div>
        </div>
    )
};

export default Register;