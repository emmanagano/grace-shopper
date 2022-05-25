import {AiOutlineUser, AiOutlineMenu} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
const { Link } = require("react-router-dom");

const Navbar = ({
    setUser, 
    setToggle, 
    toggle,
    toggleLogin, 
    setToggleLogin
}) => {
    return (
        <div className="navbar_main">
            <span>
                {/* <Link to="/">HOME</Link> */}
                <button
                    value={toggle}
                    onClick={() => {
                        setToggle(!toggle)
                    }}
                >
                    <AiOutlineMenu />
                    Shop by Category
                </button>
                <Link to="/products">Shop All</Link>
                <button
                    value={toggleLogin}
                    onClick={() => {
                        setToggleLogin(!toggleLogin)
                    }}
                >
                    <AiOutlineUser />
                </button>
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        localStorage.removeItem("token");
                        setUser(null);
                    }}
                >
                    LOGOUT
                </button>
                <Link to="/register">SIGN UP</Link> */}
                <Link 
                    to="/cart"
                >
                    <FiShoppingCart />
                </Link>
            </span>
            <span>
                <h1>
                    Just Enough Clothes
                </h1>
            </span>
        </div>
    )
}

export default Navbar;