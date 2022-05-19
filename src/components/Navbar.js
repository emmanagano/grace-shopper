const { Link } = require("react-router-dom")

const Navbar = () => {
    return (
        <div className="navbar_main">
            <Link to="/">HOME</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">SIGN UP</Link>
        </div>
    )
}

export default Navbar;