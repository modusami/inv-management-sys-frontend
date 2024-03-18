import React from "react";

const ProductSummary = ({ id, name, dayOrdered, monthOrdered, yearOrdered, onClick }) => {
	return (
		<div
			onClick={() => onClick(id)}
			className="bg-white m-3 p-3 font-bold rounded-md cursor-pointer hover:scale-95"
		>
			<p>ID: {id}</p>
			<p>Name: {name}</p>
			<p>
				Ordered Date: {dayOrdered}/{monthOrdered}/{yearOrdered}
			</p>
		</div>
	);
};

export default ProductSummary;
