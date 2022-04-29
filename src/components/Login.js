import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../api";

const Login = ({setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();
    
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await fetchLogin(username,password);
            console.log(response);
            if(response) {
                history('/');
            };
            // if (!response) {
            //     setError(response.error);
            // };
            setUser(response);
        } catch (error) {
            throw error;
        }
    };
    return (
        <div className="login_container">
            <div className="login_main">
                <form onSubmit={handleLogin}>
                    <h2>Welcome Back!</h2>
                    <label>Username:</label>
                    <input
                        required
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => {
                        setUsername(e.target.value);
                        }}
                    />
                    <label>Password:</label>
                    <input
                        required
                        text="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => {
                        setPassword(e.target.value);
                        }}
                    />
                    <button type="submit"> Log In</button>
                    <p>Don't have an account?  
                        <Link to="/register">
                            Register
                        </Link>
                    </p>
                </form>
                {error && <p> {error}!</p>}
            </div>
        </div>
    );
};

export default Login;