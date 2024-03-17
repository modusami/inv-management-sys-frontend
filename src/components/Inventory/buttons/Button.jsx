const Button = ({ text, onClick }) => {
	return (
		<div className="flex flex-1 justify-center">
			<button
				className="font-bold py-2 px-4 rounded-sm  active:scale-75 transition-all"
				onClick={onClick}
				type="button"
			>
				{text}
			</button>
		</div>
	);
};
export default Button;
