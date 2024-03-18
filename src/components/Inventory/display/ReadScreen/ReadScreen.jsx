import { useState } from "react";
import Button from "../../buttons/Button";
import SearchBar from "../../inputs/SearchBar";
import ScreenContainer from "../ScreenContainer";
import DropdownButton from "../../buttons/DropdownButton";
import ProductList from "../../product/ProductList";
const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const ReadScreen = () => {
	// for the dropdown or select
	const [selectedValue, setSelectedValue] = useState("");
	const options = ["id", "name", "category"];

	const [searchInput, setSearchInput] = useState("");

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	const [info, setInfo] = useState();

	// ------------- getting an inventory item by category -------

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
				//console.log(inventory);
				//console.log(data);
				const inventory = Object.entries(data);
				//console.log(inventory[0][1]);
				setInfo(inventory);
			})
			.catch((error) => {
				console.error("Error:", error);
				setInfo(`Error: ${error.message}`);
			});
	};

	return (
		<ScreenContainer>
			<div className="flex m-1">
				<SearchBar onChange={handleSearchInput} value={searchInput} />
				<DropdownButton
					id={"type"}
					name={"type"}
					options={options}
					selectedValue={selectedValue}
					setSelectedValue={setSelectedValue}
				/>
			</div>

			<div className="flex m-1 bg-slate-100">
				<Button text={"All Items"} onClick={handleGetInventory} />
			</div>
			<p className="text-slate-400">Display Area: </p>
			<pre className="overflow-x-auto whitespace-pre-wrap rounded-lg p-2.5 bg-slate-100">
				<ProductList data={info} />
			</pre>
		</ScreenContainer>
	);
};

export default ReadScreen;
