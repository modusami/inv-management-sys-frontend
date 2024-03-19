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
				<div className="bg-white rounded-lg shadow-md p-6 m-5">
					<div onClick={handleShowDetails} className="cursor-pointer w-full">
						<h3 className="">
							<span className="text-lg font-semibold mr-1">ID:</span>{" "}
							{inventoryData.id.id}
						</h3>
						<h3 className="">
							<span className="text-md font-semibold mr-1">Item Name:</span>
							{inventoryData.product.name}
						</h3>
					</div>
					{showDetails && (
						<div className="mt-4">
							<div className="flex gap-2 items-center mb-2">
								<span className="font-semibold">Category:</span>
								{editable ? (
									<input
										type="text"
										value={editedInventory.product.category}
										onChange={(e) => handleChange(e, "category")}
										className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								) : (
									inventoryData.product.category
								)}
							</div>
							<div className="flex gap-2 items-center mb-2">
								<span className="font-semibold">Description:</span>
								{editable ? (
									<input
										type="text"
										value={editedInventory.product.description}
										onChange={(e) => handleChange(e, "description")}
										className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								) : (
									inventoryData.product.description
								)}
							</div>
							<div className="flex gap-2 items-center mb-4">
								<span className="font-semibold">Price:</span>
								{editable ? (
									<input
										type="number"
										value={editedInventory.product.price}
										onChange={(e) => handleChange(e, "price")}
										className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								) : (
									inventoryData.product.price
								)}
							</div>
							{editable && (
								<button
									className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
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
