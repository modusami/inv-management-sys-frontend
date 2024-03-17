import logo from "/logo.jpg";
import PageHeader from "../Headers/PageHeader";

const Canvas = ({ children, title }) => {
	return (
		<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-1">
			{/* <img
				src={logo}
				alt=""
				className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 z-0"
				width="1308"
			/> */}

			<div className="absolute inset-0 bg-center"></div>
			<div className="max-h-[600px] overflow-y-auto">
				<div className="relative bg-white px-6 pt-10 pb-8 shadow-l sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Canvas;
