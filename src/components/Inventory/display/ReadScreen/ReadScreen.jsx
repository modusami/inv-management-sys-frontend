import { useState } from "react";
import Button from "../../buttons/Button";
import ScreenContainer from "../ScreenContainer";
import DropdownButton from "../../buttons/DropdownButton";
import Product from "../../product/Product";
import SearchScreen from "../SearchScreen/SearchScreen";

const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const ReadScreen = () => {
	const options = ["id", "name", "category"];
	const [selectedValue, setSelectedValue] = useState(options[0]);

	const [inventory, setInventory] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	// -------------- getting the inventory items ------------
	const handleGetInventory = (e) => {
		e.preventDefault();
		getAllInventoryItems();
	};

	/**
	 * Responsible for getting all the inventory items
	 */
	const getAllInventoryItems = () => {
		fetch(`${DOMAIN_HOST}/api/inventory`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Failed to retrieve inventory");
				}
			})
			.then((data) => {
				const inventory = Object.entries(data);
				const inventoryObject = inventory.map((value) => value[1]);
				console.log(inventoryObject);
				setInventory(inventoryObject);
			})
			.catch((error) => {
				setErrorMessage("Error connecting to backend");
			});
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
			<div className="p-4">
				<p className="text-red-500 text-sm">{errorMessage}</p>
			</div>
			<div className="p-4">
				<Button
					text={"All Items"}
					onClick={handleGetInventory}
					className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
				/>
			</div>
			<div className="p-4 bg-gray-100 rounded-lg">
				{inventory && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{inventory.map((value) => (
							<div key={value.id.id} className="bg-white rounded-lg shadow-md p-4">
								<Product inventoryData={value} editable={false} />
							</div>
						))}
					</div>
				)}
			</div>
		</ScreenContainer>
	);
};

export default ReadScreen;
