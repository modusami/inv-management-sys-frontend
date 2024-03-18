const SearchBar = ({ onChange, searchInput }) => {
	return (
		<div className="flex flex-1 items-center border border-gray-300 rounded-lg p-2">
			<svg
				className="w-5 h-5 text-gray-400 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M13.293 14.707a1 1 0 0 1-1.414 1.414l-2.5-2.5a5 5 0 1 1 1.414-1.414l2.5 2.5zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
					clipRule="evenodd"
				/>
			</svg>
			<input
				type="text"
				placeholder="Search..."
				className="outline-none bg-transparent"
				onChange={onChange}
				value={searchInput}
			/>
		</div>
	);
};

export default SearchBar;
