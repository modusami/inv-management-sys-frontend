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
			<div className="flex m-1">
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
			<p className="text-red-500">{errorMessage}</p>

			<div className="overflow-x-auto whitespace-pre-wrap rounded-lg p-2.5 bg-slate-100">
				{inventory.map((value) => (
					<div key={value.id.id}>
						<Product inventoryData={value} editable={true} onSave={handleSaveChange} />
					</div>
				))}
			</div>
			<div className="my-3 mx-2">
				<p>
					Status:
					<span
						className={
							"ml-5 font-bold " +
							(updatedMessage === "updated..." ? "text-green-300" : "text-red-400")
						}
						style={{ display: "inline-block" }} // Set display to inline-block
					>
						{updatedMessage}
					</span>
				</p>
			</div>
		</ScreenContainer>
	);
};

export default UpdateScreen;
