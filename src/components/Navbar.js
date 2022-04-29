import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { BsCart2 } from 'react-icons/bs';
import { fetchUser } from '../api';
import { useEffect, useState } from 'react';

const Navbar = ({ setUserInfo, userInfo }) => {
  const lstoken = localStorage.getItem('token');
  console.log(userInfo);
  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     const placeholder = async () => {
  //       const tempuser = await fetchUser();
  //       console.log(tempuser);
  //       setUser(tempuser);
  //     };
  //     placeholder();
  //   }, []);
  if (lstoken) {
    return (
      <div className="navbar_main">
        <div className="navbar_logo">
          <img src={require('./css/displays/JEC-logo.png')} />
          <div>
            <h1>just enough clothes</h1>
            <p>Jacob. Emma. Carmen</p>
          </div>
        </div>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/products">SHOP ALL</Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem('token');
              setUserInfo({});
            }}
          >
            LOG OUT
          </button>
          {userInfo.isAdmin ? <Link to="/admin">ADMIN</Link> : <> </>}
          <Link id="cart-link" to="/cart">
            <BsCart2 />
          </Link>
        </div>
      </div>
    );
  } else if (!lstoken) {
    return (
      <div className="navbar_main">
        <div className="navbar_logo">
          <img src={require('./css/displays/JEC-logo.png')} />
          <div>
            <h1>just enough clothes</h1>
            <p>Jacob. Emma. Carmen</p>
          </div>
        </div>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/products">SHOP ALL</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/login">LOG IN</Link>
          <Link id="cart-link" to="/cart">
            <BsCart2 />
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
