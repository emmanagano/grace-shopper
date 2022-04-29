import React from "react";

const ReadAdminTable = ({ adminUser, handleEditClick, handleDeleteClick }) => {
	const hiddenPassword = "*******";
	return (
		<>
			<tr>
				<td> {adminUser.email} </td>
				<td> {adminUser.username} </td>
				<td>
					<label>********</label>
				</td>
				{/* <td> {adminUser.isAdmin ? "yes" : "no"} </td> */}
				<td>
					<button
						style={{ color: "green", marginLeft: 10, fontSize: 18 }}
						type="button"
						onClick={(event) => handleEditClick(event, adminUser)}
					>
						Edit
					</button>

					<button
						style={{ color: "red", marginLeft: 10, fontSize: 18 }}
						type="button"
						onClick={(event) => handleDeleteClick(adminUser.id)}
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default ReadAdminTable;
