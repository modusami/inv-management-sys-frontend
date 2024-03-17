import { useState } from "react";

const CreateScreen = () => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add logic to submit the form data
		console.log(formData);
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-md">
			<h2 className="text-lg font-semibold mb-4">Create Inventory Item</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="name" className="block text-sm font-medium text-gray-700">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="category" className="block text-sm font-medium text-gray-700">
						Category
					</label>
					<input
						type="text"
						id="category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					></textarea>
				</div>
				<div className="mb-4">
					<label htmlFor="price" className="block text-sm font-medium text-gray-700">
						Price
					</label>
					<input
						type="text"
						id="price"
						name="price"
						value={formData.price}
						onChange={handleChange}
						className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
				>
					Create Item
				</button>
			</form>
		</div>
	);
};

export default CreateScreen;
