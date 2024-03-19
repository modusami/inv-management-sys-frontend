import React, { useState } from "react";

const Product = ({ inventoryData, editable, onSave }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [editedInventory, setEditedInventory] = useState({ ...inventoryData });

	const handleShowDetails = (e) => {
		e.stopPropagation();
		setShowDetails(!showDetails);
	};

	const handleChange = (event, type) => {
		setEditedInventory({
			...editedInventory,
			product: {
				...editedInventory.product,
				[type]: event.target.value,
			},
		});
	};

	const handleSubmit = () => {
		onSave(editedInventory);
	};

	return (
		<div>
			{inventoryData && inventoryData.id && inventoryData.product && (
				<div className="bg-white p-3 rounded-lg m-5 w-full">
					<div onClick={handleShowDetails} className="cursor-pointer w-full">
						<h3 className="font-bold">ID: {inventoryData.id.id}</h3>
						<h3 className="font-bold">Product Name: {inventoryData.product.name}</h3>
					</div>
					{showDetails && (
						<div className="m-3 w-full">
							<p className="flex gap-2">
								Category:{" "}
								{editable ? (
									<input
										type="text"
										value={editedInventory.product.category}
										onChange={(e) => handleChange(e, "category")}
										className="w-full"
									/>
								) : (
									inventoryData.product.category
								)}
							</p>
							<p className="flex gap-2">
								Description:{" "}
								{editable ? (
									<input
										type="text"
										value={editedInventory.product.description}
										onChange={(e) => handleChange(e, "description")}
										className="w-full"
									/>
								) : (
									inventoryData.product.description
								)}
							</p>
							<p className="flex gap-2">
								Price:{" "}
								{editable ? (
									<input
										type="number"
										value={editedInventory.product.price}
										onChange={(e) => handleChange(e, "price")}
										className="w-full"
									/>
								) : (
									inventoryData.product.price
								)}
							</p>
							{editable && (
								<button
									className="bg-lime-700 text-white rounded-lg p-3 my-3"
									onClick={handleSubmit}
								>
									Submit Change
								</button>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Product;
