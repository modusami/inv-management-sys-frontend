const DropdownButton = ({ id, name, options, selectedValue, setSelectedValue }) => {
	return (
		<div className="flex justify-center">
			<select
				name={name}
				id={id}
				className="w-full"
				value={selectedValue}
				onChange={(e) => setSelectedValue(e.target.value)}
			>
				{options.map((value, index) => (
					<option
						className="text-center"
						key={`${value.toLowerCase()}-${index}`}
						value={value.toLowerCase()}
					>
						Search By: {value}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropdownButton;
