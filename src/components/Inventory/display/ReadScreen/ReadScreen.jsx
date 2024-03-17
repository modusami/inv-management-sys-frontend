import { useState } from "react";
import Button from "../../buttons/Button";
import SearchBar from "../../inputs/SearchBar";
const DOMAIN_HOST = import.meta.env.VITE_DOMAIN_HOST;

const ReadScreen = () => {
	const [info, setInfo] = useState("");

	const handleGetInventory = (e) => {
		e.preventDefault();
		makeFetchRequest();
	};

	const makeFetchRequest = () => {
		fetch(`${DOMAIN_HOST}/api/inventory`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Failed to retrieve inventory");
				}
			})
			.then((inventory) => {
				console.log(inventory);
				setInfo(JSON.stringify(inventory, null, 2));
			})
			.catch((error) => {
				console.error("Error:", error);
				setInfo(`Error: ${error.message}`);
			});
	};

	return (
		<div>
			<SearchBar />
			<div className="flex m-1 bg-slate-100">
				<Button text={"All Items"} onClick={handleGetInventory} />
				<Button text={"Single Item"} />
			</div>
			<p className="text-slate-400">Display Area: </p>
			<pre className="overflow-x-auto whitespace-pre-wrap rounded-lg p-2.5 bg-slate-100">
				{info}
			</pre>
		</div>
	);
};

export default ReadScreen;
