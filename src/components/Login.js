import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../api";

const Login = ({setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const loginHandler = async () => {
        try {
            const info = await fetchLogin(
                username,
                password
            );
            if(info.error) {
                setError(info.error);
            };
            if (info.user) {
                setUser(info.user);
                localStorage.setItem("token", info.user.token);
                navigate("/")
            };
            setUsername("");
            setPassword("");
            setError("");
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className="login_main">
            {error && <h2>{error}</h2>}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    loginHandler();
                }}
            >
                <input
                    required
                    type="text"
                    placeholder="Username*"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <input
                    required
                    type="password"
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login;