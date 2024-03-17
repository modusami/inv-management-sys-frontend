const PageHeader = () => {
	return (
		<div className="z-10 absolute top-5 left-1/2 transform -translate-x-1/2 w-full flex justify-center align-middle">
			<p className="text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text font-semibold uppercase text-sm sm:text-sm md:text-l lg:text-xl xl:text-xl">
				Inventory Management System By: <span className="text-black">Odusami</span>
			</p>
		</div>
	);
};

export default PageHeader;
