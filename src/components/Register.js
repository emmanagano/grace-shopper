import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../api";

const Register = () => {
    const [username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const registerHandler = async () => {
        try {
            const info = await fetchRegister(
                username,
                email,
                password
            );
            if (info.error) {
                setError(info.error)
            };
            if (info.user) {
                setUsername("");
                setPassword("");
                setError("");
                navigate("/login")
            };
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className="register_main">
            {error && <h2>{error}</h2>}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    registerHandler();
                }}
            >
                <input
                    required
                    type="text"
                    placeholder="Username*"
                    value={username}
                    onChange={(e) => {
                        e.preventDefault();
                        setUsername(e.target.value);
                    }}
                />
                <input
                    required
                    type="text"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => {
                        e.preventDefault();
                        setEmail(e.target.value);
                    }}
                />
                <input
                    required
                    type="text"
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }}
                />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Register;