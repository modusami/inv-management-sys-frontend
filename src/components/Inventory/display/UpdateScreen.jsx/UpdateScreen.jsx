import React, { useState, useRef } from "react";
import SearchBar from "../../inputs/SearchBar";
import ScreenContainer from "../ScreenContainer";
import DropdownButton from "../../buttons/DropdownButton";
import Product from "../../product/Product";
import axios from "axios";

const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const UpdateScreen = () => {
	const options = ["id", "name", "category"];
	const [selectedValue, setSelectedValue] = useState(options[0]);
	const [searchInput, setSearchInput] = useState("");
	const [inventory, setInventory] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const errorMessageRef = useRef(null);
	const [updatedMessage, setUpatedMessage] = useState("waiting...");

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

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
							(updatedMessage === "updated.." ? "text-green-300" : "text-red-400")
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
