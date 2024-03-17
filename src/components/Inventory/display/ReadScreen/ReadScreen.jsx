import Button from "../../buttons/Button";
import SearchBar from "../../inputs/SearchBar";

const ReadScreen = () => {
	return (
		<div>
			<SearchBar />
			<div className="flex m-1 bg-slate-100">
				<Button text={"All Items"} />
				<Button text={"Single Item"} />
			</div>
			<p className="text-slate-400">Display Area: </p>
			<pre className="overflow-x-auto whitespace-pre-wrap rounded-lg p-2.5 bg-slate-100"></pre>
		</div>
	);
};

export default ReadScreen;
