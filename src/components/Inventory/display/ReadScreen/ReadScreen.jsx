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
			<div className="my-3 mx-2">
				<p className="text-red-500">{errorMessage}</p>
			</div>
			<div className="flex m-1 bg-slate-100">
				<Button text={"All Items"} onClick={handleGetInventory} />
			</div>

			<div className="overflow-x-auto whitespace-pre-wrap rounded-lg p-2.5 bg-slate-100">
				{inventory &&
					inventory.map((value) => (
						<div key={value.id.id}>
							<Product inventoryData={value} editable={false} />
						</div>
					))}
			</div>
		</ScreenContainer>
	);
};

export default ReadScreen;
