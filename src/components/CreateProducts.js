import React, { useState, useEffect, Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ReadProductTable from './ReadProductTable';
import EditProductTable from './EditProductTable';
import './CreateAdmin.css';
import nextId from 'react-id-generator';
import {
  addProducts,
  fetchProducts,
  updateProducts,
  deleteProducts,
} from '../api';

const CreateProducts = ({ products, setProducts, token }) => {
  const history = useNavigate();

  const [addFormData, setAddFormData] = useState({
    id: nextId(),
    title: '',
    price: 0,
    category: '',
    description: '',
    imgURL: '',
    inventory: 0,
  });

  const [editFormData, setEditFormData] = useState({
    title: '',
    price: 0,
    category: '',
    description: '',
    imgURL: '',
    inventory: 0,
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

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      id: nextId(),
      title: addFormData.title,
      price: addFormData.price,
      category: addFormData.category,
      description: addFormData.description,
      imgURL: addFormData.imgURL,
      inventory: addFormData.inventory,
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);

    try {
      console.log(addFormData.imgURL);
      const response = await addProducts(
        token,
        addFormData.title,
        addFormData.price,
        addFormData.category,
        addFormData.description,
        addFormData.imgURL,
        addFormData.inventory
      );
      console.log(response);

      setAddFormData(newProduct);
      fetchProducts().then((product) => {
        setProducts(product);
      });

      //   history(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedProduct = {
      id: editId,
      title: editFormData.title,
      price: editFormData.price,
      category: editFormData.category,
      description: editFormData.description,
      imgURL: editFormData.imgURL,
      inventory: editFormData.inventory,
    };
    const newProducts = [...products];
    const index = products.findIndex((product) => product.id === editId);
    newProducts[index] = editedProduct;
    setProducts(newProducts);
    console.log('Edit', products, token, editFormData.id, editId);

    try {
      const response = await updateProducts(
        token,
        editId,
        editFormData.title,
        editFormData.price,
        editFormData.category,
        editFormData.description,
        editFormData.imgURL,
        editFormData.inventory
      );

      setEditId(null);
      console.log('response', response);

      if (response.name !== 'error') {
        fetchProducts().then((product) => {
          setProducts(product);
          history('/admin/createProduct');
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (event, product) => {
    event.preventDefault();
    setEditId(product.id);

    const formValues = {
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      imgURL: product.imgURL,
      inventory: product.inventory,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditId(null);
  };

  const handleDeleteClick = async (editId) => {
    const newProducts = [...products];
    const index = products.findIndex((product) => product.id === editId);
    newProducts.splice(index, 1);
    setProducts(newProducts);

    try {
      const response = await deleteProducts(editId, token);
      console.log('response', response);

      if (response.message === 'Product Deleted!') {
        fetchProducts().then((product) => {
          setProducts(product);
          history('/admin/createProduct');
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="admin-create-product">
        <nav className="nav-admin">
          <NavLink className="navLink" to="/admin/createAdmin">
            TEAM
          </NavLink>

          <NavLink className="navLink" to="/admin/createProduct">
            PRODUCTS
          </NavLink>
        </nav>
        {/* <button className="create-product-btn">Create Product </button> */}

        <h4> Create Products </h4>
        <form
          id="product-form"
          className="admin-create-product-form"
          onSubmit={handleAddFormSubmit}
        >
          <input
            type="text"
            rows={2}
            name="title"
            required="required"
            placeholder="Enter title..."
            onChange={handleAddFormChange}
          />

          <input
            // style={{ fontSize: 18, width: "130px" }}
            type="number"
            name="price"
            required="required"
            placeholder="Enter price..."
            onChange={handleAddFormChange}
          />

          <input
            // style={{ fontSize: 18, width: "200px" }}
            type="text"
            name="category"
            required="required"
            placeholder="Enter category..."
            onChange={handleAddFormChange}
          />

          <input
            // style={{ fontSize: 18, width: "250px" }}
            type="textarea"
            name="description"
            required="required"
            placeholder="Enter description..."
            onChange={handleAddFormChange}
          />
          <input
            // style={{ fontSize: 18, width: "250px" }}
            // type="textarea"
            // rows={2}
            name="imgURL"
            required="required"
            placeholder="Enter imgURL..."
            onChange={handleAddFormChange}
          />
          <input
            // style={{ fontSize: 18, width: "150px" }}
            type="number"
            name="inventory"
            onChange={handleAddFormChange}
            required="required"
            placeholder="Enter inventory..."
          />

          {/* <button style={{ fontSize: 18, width: "150px" }} type="submit">
						Add
					</button> */}

          <button type="submit">Add</button>
        </form>

        <form onSubmit={handleEditFormSubmit}>
          <table className="content-table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Inventory</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <Fragment key={product.id}>
                  {editId === product.id ? (
                    <EditProductTable
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadProductTable
                      product={product}
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
    </>
  );
};

export default CreateProducts;
