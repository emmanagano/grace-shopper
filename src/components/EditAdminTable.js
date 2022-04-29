import React from "react";

const EditAdminTable = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}) => {
	return (
		<tr>
			<td>
				<input
					// style={{ fontSize: 18, width: "250px" }}
					type="text"
					required="required"
					value={editFormData.email}
					placeholder="Enter email..."
					name="email"
					onChange={handleEditFormChange}
				></input>
			</td>

			<td>
				<input
					// style={{ fontSize: 18, width: "250px" }}
					type="text"
					required="required"
					value={editFormData.username}
					placeholder="Enter name..."
					name="username"
					onChange={handleEditFormChange}
				></input>
			</td>

			<td>
				<input
					// style={{ fontSize: 18, width: "250px" }}
					type="password"
					required="required"
					value={editFormData.password}
					placeholder="Enter password..."
					name="password"
					onChange={handleEditFormChange}
				></input>
			</td>

			<td>
				<button style={{ marginLeft: 12, fontSize: 18 }} type="submit">
					Save
				</button>
				<button
					style={{ marginLeft: 12, fontSize: 18 }}
					type="button"
					onClick={handleCancelClick}
				>
					Cancel
				</button>
			</td>
		</tr>
	);
};

export default EditAdminTable;
