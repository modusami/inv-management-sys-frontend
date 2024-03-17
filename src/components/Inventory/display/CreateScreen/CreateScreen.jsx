import { useState } from "react";
import ScreenContainer from "../ScreenContainer";

const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const CreateScreen = () => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
	});

	const [message, setMessage] = useState("pending...");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		makeFetchRequest();
	};

	const makeFetchRequest = () => {
		const currentData = formData;
		currentData.price = parseFloat(currentData.price);
		fetch(`${DOMAIN_HOST}/api/inventory`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(currentData),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Failed to add item");
				}
			})
			.then((data) => {
				console.log(data);
				setMessage("success");
			})
			.catch((err) => {
				console.log("Error: ", err);
				setMessage("failed");
			});
	};

	return (
		<ScreenContainer>
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
				<p className="my-3 font-bold">
					Status of creation:{" "}
					<span
						className={
							"mx-2 " +
							(message === "success"
								? "text-green-500"
								: message === "pending..."
								? "text-slate-400"
								: message === "failed"
								? "text-red-500"
								: "")
						}
					>
						{message}
					</span>
				</p>
			</form>
		</ScreenContainer>
	);
};

export default CreateScreen;
