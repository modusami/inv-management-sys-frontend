import React, { useState } from "react";
import ProductSummary from "./ProductSummary";
import ProductDetails from "./ProductDetails";

const ProductList = ({ data }) => {
	const [selectedProductId, setSelectedProductId] = useState(null);

	const handleProductClick = (productId) => {
		console.log(productId);
		setSelectedProductId(productId);
	};

	if (!data || data.length === 0) {
		return <div>No products found.</div>;
	}

	console.log(data);
	return (
		<div>
			<h2>Products</h2>
			{data.map(([productId, productInfo]) => (
				<ProductSummary
					key={productId}
					id={productId}
					name={productInfo?.product?.name} // Ensure product name is accessible
					dayOrdered={productInfo.dayOrdered}
					monthOrdered={productInfo.monthOrdered}
					yearOrdered={productInfo.yearOrdered}
					onClick={handleProductClick}
				/>
			))}
			{selectedProductId && (
				<ProductDetails
					product={
						data.find(([productId]) => productId === selectedProductId) // Ensure selected product details are accessible
					}
				/>
			)}
		</div>
	);
};

export default ProductList;
