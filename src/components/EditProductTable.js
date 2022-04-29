import React from 'react';

const EditProductTable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  console.log(editFormData);
  return (
    <tr>
      <td>
        <textarea
          // style={{ fontSize: 18, width: "250px" }}
          required="required"
          value={editFormData.title}
          placeholder="Enter title..."
          name="title"
          onChange={handleEditFormChange}
        ></textarea>
      </td>

      <td>
        <textarea
          // style={{ fontSize: 18, width: "135px" }}
          type="number"
          required="required"
          value={editFormData.price}
          placeholder="Enter price..."
          name="price"
          onChange={handleEditFormChange}
        ></textarea>
      </td>

      <td>
        <textarea
          // style={{ fontSize: 18, width: "150px" }}
          type="text"
          required="required"
          value={editFormData.category}
          placeholder="Enter category..."
          name="category"
          onChange={handleEditFormChange}
        ></textarea>
      </td>

      <td>
        <textarea
          // style={{ fontSize: 18, width: "375px" }}
          type="text"
          required="required"
          value={editFormData.description}
          placeholder="Enter description..."
          name="description"
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
        <textarea
          // style={{ fontSize: 18, width: "450px" }}
          type="text"
          required="required"
          value={editFormData.imgURL}
          placeholder="Enter imgURL..."
          name="imgURL"
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
        <textarea
          // style={{ fontSize: 18, width: "140px" }}
          type="number"
          required="required"
          value={editFormData.inventory}
          placeholder="Enter inventory..."
          name="inventory"
          onChange={handleEditFormChange}
        ></textarea>
      </td>

      <td>
        <button style={{ margin: 10, fontSize: 18 }} type="submit">
          Save
        </button>
        <button
          style={{ margin: 10, fontSize: 18 }}
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditProductTable;
