const DropdownButton = ({ id, name, options }) => {
	return (
		<div className="flex justify-center">
			<select name={name} id={id} className="w-full">
				{options.map((value, key) => {
					return (
						<>
							<option className="text-center" key={key} value={value.toLowerCase()}>
								Search By: {value}
							</option>
							;
						</>
					);
				})}
			</select>
		</div>
	);
};

export default DropdownButton;
