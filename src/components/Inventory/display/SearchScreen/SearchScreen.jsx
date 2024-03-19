const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;
import SearchBar from "../../inputs/SearchBar";
import { useState } from "react";

const SearchScreen = ({ setErrorMessage, selectedValue, setInventory }) => {
	const startPrefixErrorMessage = "Failed to get item";

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	const [searchInput, setSearchInput] = useState("");

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

	return (
		<SearchBar onChange={handleSearchInput} value={searchInput} handleSearch={handleSearch} />
	);
};

export default SearchScreen;
