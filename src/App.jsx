import { useState } from "react";
import Canvas from "./components/Structures/Canvas";
import "./App.css";
import Button from "./components/Inventory/buttons/Button";
import ReadScreen from "./components/Inventory/display/ReadScreen/ReadScreen";
import CreateScreen from "./components/Inventory/display/CreateScreen/CreateScreen";
import PageHeader from "./components/Headers/PageHeader";
import UpdateScreen from "./components/Inventory/display/UpdateScreen.jsx/UpdateScreen";

function App() {
	const [contentType, setContentType] = useState("create");

	const handleScreen = (event) => {
		const screenDisplayed = event.target.innerText.toLowerCase();
		setContentType(screenDisplayed);
	};

	return (
		<div className="w-lg-[75%] w-md-[90%] w-sm-[100%] mx-auto">
			<div className="flex py-2 px-2">
				<PageHeader />
				<div className="flex w-full gap-5 justify-center my-3">
					<Button text={"Create"} onClick={handleScreen} />
					<Button text={"Read"} onClick={handleScreen} />
					<Button text={"Update"} onClick={handleScreen} />
					<Button text={"Delete"} onClick={handleScreen} />
				</div>
			</div>

			<Canvas>
				{contentType == "create" && <CreateScreen />}
				{contentType == "read" && <ReadScreen />}
				{contentType == "update" && <UpdateScreen />}
				{contentType == "delete" && (
					<h1 className="text-center font-bold text-lg">Coming Soon</h1>
				)}
			</Canvas>
		</div>
	);
}

export default App;
