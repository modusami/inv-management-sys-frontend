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
		<div className="">
			<div className="max-w-full w-full bg-white rounded-lg shadow-lg px-8 py-6">
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-700"
						>
							Category
						</label>
						<input
							type="text"
							id="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
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
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label htmlFor="price" className="block text-sm font-medium text-gray-700">
							Price
						</label>
						<input
							type="text"
							id="price"
							name="price"
							value={formData.price}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Create Item
					</button>
					<p className="text-center font-bold">
						Status of creation:{" "}
						<span
							className={`mx-2 ${
								message === "success"
									? "text-green-500"
									: message === "pending..."
									? "text-slate-400"
									: message === "failed"
									? "text-red-500"
									: ""
							}`}
						>
							{message}
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default CreateScreen;
