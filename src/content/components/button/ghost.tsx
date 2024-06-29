const GhostButton = () => {
	return (
		<button className='group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 hover:border-primary-700 bg-gradient-to-tr hover:from-primary-600 hover:to-primary-500 px-4 py-1 transition duration-100 ease-in-out  hover:active:border-primary-600 active:shadow-none'>
			<span className='relative font-medium text-black group-hover:text-white  dark:text-white'>CraftedUI</span>
		</button>
	);
};

export default GhostButton;
