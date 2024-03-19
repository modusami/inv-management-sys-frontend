import React, { useState, useRef } from "react";
import SearchScreen from "../SearchScreen/SearchScreen";
import ScreenContainer from "../ScreenContainer";
import DropdownButton from "../../buttons/DropdownButton";
import Product from "../../product/Product";
import axios from "axios";

const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const UpdateScreen = () => {
	const options = ["id", "name", "category"];
	const [selectedValue, setSelectedValue] = useState(options[0]);
	const [inventory, setInventory] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [updatedMessage, setUpatedMessage] = useState("waiting...");

	const handleSaveChange = async (product) => {
		console.log(product);
		try {
			const response = await axios.put(`${DOMAIN_HOST}/api/inventory`, product);
			setUpatedMessage("updated...");
		} catch (error) {
			setUpatedMessage("error...");
			console.log(error);
		}
	};

	return (
		<ScreenContainer>
			<div className="flex items-center gap-4 p-4">
				<SearchScreen
					setErrorMessage={setErrorMessage}
					selectedValue={selectedValue}
					setInventory={setInventory}
				/>
				<DropdownButton
					id={"type"}
					name={"type"}
					options={options}
					selectedValue={selectedValue}
					setSelectedValue={setSelectedValue}
				/>
			</div>
			<p className="text-red-500 text-sm p-4">{errorMessage}</p>
			<div className="p-4 bg-gray-100 rounded-lg">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{inventory.map((value) => (
						<div key={value.id.id} className="bg-white rounded-lg shadow-md p-4">
							<Product
								inventoryData={value}
								editable={true}
								onSave={handleSaveChange}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="p-4">
				<p className="text-sm">
					Status:{" "}
					<span
						className={`ml-2 font-bold ${
							updatedMessage === "updated..." ? "text-green-500" : "text-red-500"
						}`}
					>
						{updatedMessage}
					</span>
				</p>
			</div>
		</ScreenContainer>
	);
};

export default UpdateScreen;
