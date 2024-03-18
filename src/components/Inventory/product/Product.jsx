import { useState } from "react";

const Product = ({ inventoryData }) => {
	const [showDetails, setShowDetails] = useState(false);

	const handleShowDetails = (e) => {
		e.stopPropagation();
		setShowDetails(!showDetails);
	};

	return (
		<div>
			{inventoryData && inventoryData.id && inventoryData.product && (
				<div className="bg-white p-3 rounded-lg m-5 w=full">
					<div
						onClick={handleShowDetails}
						className="cursor-pointer active:scale-95 hover:scale-105 w=full"
					>
						<h3 className="font-bold">ID: {inventoryData.id.id}</h3>
						<h3 className="font-bold">Product Name: {inventoryData.product.name}</h3>
					</div>
					{showDetails && (
						<div className="m-3">
							<p>Category: {inventoryData.product.category}</p>
							<p>Description: {inventoryData.product.description}</p>
							<p>Price: {inventoryData.product.price}</p>
							<p>
								Order Date: {inventoryData.monthOrdered} /{" "}
								{inventoryData.dayOrdered} / {inventoryData.yearOrdered}
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Product;
