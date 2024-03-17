import { useState } from "react";
import Canvas from "./components/Structures/Canvas";
import "./App.css";
import Button from "./components/Inventory/buttons/Button";
import ReadScreen from "./components/Inventory/display/ReadScreen/ReadScreen";

function App() {
	const [contentType, setContentType] = useState("home");

	return (
		<>
			<Canvas>
				<div className="flex w-full gap-5 justify-center my-3">
					<Button text={"Create"} />
					<Button text={"Read"} />
					<Button text={"Update"} />
					<Button text={"Delete"} />
				</div>
				<div className="mt-6 w-full h-5"></div>
				<ReadScreen />
			</Canvas>
		</>
	);
}

export default App;
