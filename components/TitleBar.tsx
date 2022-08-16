// TitleBar Component

export default function TitleBar() {
	return (
		<div className='h-[calc(100vh-12vh)] p-3 flex flex-col justify-between align-middle w-min text-center pl-6 pr-6 py-[3vh] my-[6vh] border-r-[1px] border-gray-700'>
			<div
				className='font-display font-bold text-5xl rotate-180 hover:text-navy-900 cursor-default transition-all duration-200'
				style={{
					writingMode: "vertical-rl",
					WebkitTextStrokeColor: "white",
					WebkitTextStrokeWidth: "1px",
				}}>
				aneeley<span className='opacity-20'>.dev</span>
			</div>
			<div>L</div>
		</div>
	);
}
