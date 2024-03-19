const Button = ({ text, onClick }) => {
	return (
		<button
			className={` hover:border-l-2 text-black font-bold py-2 px-4 rounded-md transition-colors duration-300`}
			onClick={onClick}
			type="button"
		>
			{text}
		</button>
	);
};
export default Button;
