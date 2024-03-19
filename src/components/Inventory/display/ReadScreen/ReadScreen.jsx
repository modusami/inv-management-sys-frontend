import { useState } from "react";
import Button from "../../buttons/Button";
import SearchBar from "../../inputs/SearchBar";
import ScreenContainer from "../ScreenContainer";
import DropdownButton from "../../buttons/DropdownButton";
import Product from "../../product/Product";

const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const ReadScreen = () => {
	const options = ["id", "name", "category"];
	const [selectedValue, setSelectedValue] = useState(options[0]);

	const [searchInput, setSearchInput] = useState("");

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	const [inventory, setInventory] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const startPrefixErrorMessage = "Failed to get item";

	const handleSearch = () => {
		if (searchInput === "") {
			return;
		}
		switch (selectedValue) {
			case "id":
				{
					handleIdSearch();
				}
				break;
			case "category":
				{
					handleCategorySearch();
				}
				break;
			case "name": {
				handleNameSearch();
			}
		}
	};

	const handleIdSearch = () => {
		fetch(`${DOMAIN_HOST}/api/inventory/${searchInput}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					setErrorMessage(`${startPrefixErrorMessage} by id : ${searchInput}`);
				}
			})
			.then((data) => {
				if (data === undefined || data === null) {
					setErrorMessage(`${startPrefixErrorMessage} by id : ${searchInput}`);
					return;
				}
				const arr = [];
				arr.push(data);

				setInventory(arr);
			})
			.catch((err) => {
				setErrorMessage(`${startPrefixErrorMessage} by id : ${searchInput}`);
			});
	};

	const handleNameSearch = () => {
		fetch(`${DOMAIN_HOST}/api/inventory/name/${searchInput}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					setErrorMessage(`${startPrefixErrorMessage} by name : ${searchInput}`);
				}
			})
			.then((data) => {
				if (data == null || data == undefined) {
					setErrorMessage(`${startPrefixErrorMessage} by name : ${searchInput}`);
					return;
				}
				setInventory(data);
				setErrorMessage("");
			})
			.catch((err) => {
				setErrorMessage(`${startPrefixErrorMessage} by name : ${searchInput}`);
			});
	};

	const handleCategorySearch = () => {
		fetch(`${DOMAIN_HOST}/api/inventory/category/${searchInput}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					setErrorMessage(`${startPrefixErrorMessage} by category : ${searchInput}`);
				}
			})
			.then((data) => {
				if (data == null || data == undefined) {
					setErrorMessage(`${startPrefixErrorMessage} by category : ${searchInput}`);
					return;
				}
				setInventory(data);
				setErrorMessage("");
			})
			.catch((err) => {
				setErrorMessage(`${startPrefixErrorMessage} by category : ${searchInput}`);
			});
	};

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
				<SearchBar
					onChange={handleSearchInput}
					value={searchInput}
					handleSearch={handleSearch}
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
