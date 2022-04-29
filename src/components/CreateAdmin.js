import React, { useState, useEffect, Fragment } from 'react';
import ReadAdminTable from './ReadAdminTable';
import { registerAdmin, fetchAdmin } from '../api';
import './CreateAdmin.css';
import nextId from 'react-id-generator';
import { NavLink, useNavigate } from 'react-router-dom';
import EditAdminTable from './EditAdminTable';

const CreateAdmin = (token) => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    id: nextId(),
    email: '',
    username: '',
    password: null,
  });
  const history = useNavigate();

  useEffect(() => {
    try {
      fetchAdmin().then((adminUsers) => {
        console.log('adminUsers', adminUsers);
        setAdminUsers(adminUsers);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [editFormData, setEditFormData] = useState({
    email: '',
    username: '',
    password: null,
  });
  const [editId, setEditId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log('addFormData', addFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    const newAdminUser = {
      id: nextId(),
      email: addFormData.email,
      username: addFormData.username,
      password: addFormData.password,
    };
    const newAdminUsers = [...adminUsers, newAdminUser];
    setAdminUsers(newAdminUsers);
    try {
      const response = await registerAdmin(
        addFormData.email,
        addFormData.username,
        addFormData.password,
        true
      );
      console.log('response', response);
      history(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedAdminUser = {
      id: editId,
      email: editFormData.email,
      username: editFormData.username,
      password: editFormData.password,
    };
    const newAdminUsers = [...adminUsers];
    const index = adminUsers.findIndex((adminUser) => adminUser.id === editId);
    newAdminUsers[index] = editedAdminUser;
    setAdminUsers(newAdminUsers);

    // try {
    // 	const response = await registerAdmin(
    // 		token,
    //    editId,
    //    editFormData.email,
    // 		editFormData.username,
    // 		editFormData.password,
    //
    // 	);
    setEditId(null);
    // 	console.log("response", response);
    // } catch (error) {
    // 	console.error(error);
    // }
  };

  const handleEditClick = (event, adminUser) => {
    event.preventDefault();
    setEditId(adminUser.id);

    const formValues = {
      email: adminUser.email,
      username: adminUser.username,
      password: adminUser.password,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditId(null);
  };

  const handleDeleteClick = (editId) => {
    const newAdminUsers = [...adminUsers];
    const index = adminUsers.findIndex((adminUser) => adminUser.id === editId);
    newAdminUsers.splice(index, 1);
    setAdminUsers(newAdminUsers);
  };

  return (
    <div className="admin-create-adminTeam">
      <nav className="nav-admin">
        <NavLink className="navlink" to="/admin/createAdmin">
          TEAM
        </NavLink>

        <NavLink className="navLink" to="/admin/createProduct">
          PRODUCTS
        </NavLink>
      </nav>
      <h4> Manage Admin Teams</h4>
      <form
        onSubmit={handleAddFormSubmit}
        className="admin-create-adminTeam-form"
      >
        <input
          // style={{ fontSize: 18, width: "250px" }}
          type="text"
          name="email"
          required="required"
          placeholder="Enter email..."
          onChange={handleAddFormChange}
        />

        <input
          // style={{ fontSize: 18, width: "250px" }}
          required
          type="text"
          name="username"
          placeholder="Enter username.."
          onChange={handleAddFormChange}
        />

        <input
          // style={{ fontSize: 18, width: "250px" }}
          type="password"
          name="password"
          required="required"
          placeholder="Enter password..."
          onChange={handleAddFormChange}
        />

        <button style={{ fontSize: 18, width: '250px' }} type="submit">
          Add
        </button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">User Name</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {adminUsers.map((adminUser) => (
              <Fragment key={adminUser.id}>
                {editId === adminUser.id ? (
                  <EditAdminTable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadAdminTable
                    adminUser={adminUser}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CreateAdmin;
