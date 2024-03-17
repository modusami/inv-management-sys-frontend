import { useState } from "react";
import Canvas from "./components/Structures/Canvas";
import "./App.css";
import Button from "./components/Inventory/buttons/Button";
import ReadScreen from "./components/Inventory/display/ReadScreen/ReadScreen";
import CreateScreen from "./components/Inventory/display/CreateScreen/CreateScreen";
import PageHeader from "./components/Headers/PageHeader";

function App() {
	const [contentType, setContentType] = useState("create");

	const handleScreen = (event) => {
		const screenDisplayed = event.target.innerText.toLowerCase();
		setContentType(screenDisplayed);
	};

	return (
		<>
			<div>
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
			</Canvas>
		</>
	);
}

export default App;
