import logo from "/logo.jpg";

const Canvas = ({ children, title }) => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-white-100 py-6 sm:py-1">
			{/* <img
				src={logo}
				alt=""
				className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 z-0"
				width="1308"
			/> */}

			<div className="">{children}</div>
		</div>
	);
};

export default Canvas;
