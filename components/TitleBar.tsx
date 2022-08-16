// TitleBar Component

export default function TitleBar() {
	return (
		<div className='h-screen p-3 flex flex-col justify-between align-middle w-min text-right pl-32 py-32'>
			<div
				className='font-display font-bold text-6xl rotate-180 hover:text-navy-900 cursor-default transition-all duration-200'
				style={{
					writingMode: "vertical-rl",
					WebkitTextStrokeColor: "white",
					WebkitTextStrokeWidth: "1px",
				}}>
				ANDREW NEELEY
			</div>
			<div>Links</div>
		</div>
	);
}
