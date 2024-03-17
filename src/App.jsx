import { useState } from "react";
import Canvas from "./components/Structures/Canvas";
import "./App.css";

function App() {
	const [contentType, setContentType] = useState("home");

	return (
		<>
			<Canvas>
				<h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat neque
					eligendi deleniti ullam quasi iure nisi provident necessitatibus? Magnam quasi,
					quisquam sequi maiores qui quidem dolores atque perspiciatis doloremque quae
					quis laudantium corporis mollitia id saepe repudiandae accusamus explicabo
					voluptatum deleniti. Enim doloremque in fugit velit officia consequuntur,
					assumenda provident pariatur ab tempora laboriosam minus non commodi veritatis?
					Labore perferendis fuga tempore molestiae vero excepturi, mollitia illum velit
					aliquam eius iure? Sunt, veritatis similique. Enim numquam assumenda rerum
					distinctio!
				</h1>
			</Canvas>
		</>
	);
}

export default App;
