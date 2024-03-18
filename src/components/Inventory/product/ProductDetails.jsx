import React from "react";

const ProductDetails = ({ product }) => {
	if (!product) {
		return null; // Return null if product is undefined
	}
	const {
		product: { name, category, description, price },
		dayOrdered,
		monthOrdered,
		yearOrdered,
	} = product[1];

	return (
		<div className="m-5 p-3 bg-white text-xl">
			<h1 className="capitalize font-bold">current product:</h1>
			<p>Name: {name}</p>
			<p>Category: {category}</p>
			<p>Description: {description}</p>
			<p>Price: ${price}</p>
			<p>
				Ordered Date: {dayOrdered}/{monthOrdered}/{yearOrdered}
			</p>
		</div>
	);
};

export default ProductDetails;
