import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchAllUsers } from '../api';

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    // textDecoration: isActive ? "none " : "underline",
    margin: '7px',
    fontSize: '15px',
    display: 'inline-block',
    marginRight: '1.5em',
    textDecoration: 'none',
  };
};

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const users = await fetchAllUsers();
      console.log(users.users);
      setUsers(users.users);
    };
    getAllUsers();
  }, []);
  return (
    <>
      <nav className="nav-admin">
        <NavLink to="createAdmin" style={navLinkStyles}>
          TEAM
        </NavLink>

        <NavLink to="createProduct" style={navLinkStyles}>
          PRODUCTS
        </NavLink>
      </nav>
      <Outlet />
      <div className="admin-users">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h4>
                Email: {user.email} | Username: {user.username} | Admin:{' '}
                {user.isAdmin ? 'true' : 'false'}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Admin;
