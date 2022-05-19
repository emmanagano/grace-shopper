const { Link } = require("react-router-dom")

const Navbar = ({setUser}) => {
    return (
        <div className="navbar_main">
            {/* <Link to="/">HOME</Link> */}
            <Link to="/products">SHOP ALL</Link>
            <Link to="/login">LOGIN</Link>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    setUser(null);
                }}
            >
                LOGOUT
            </button>
            <Link to="/register">SIGN UP</Link>
        </div>
    )
}

export default Navbar;