import { useState } from "react";

import { About } from "../sections";
import { TitleBar } from "../components";

export default function Home() {
	const orangeGradient = "linear-gradient(to left, #de6262, #ffb88c)";
	const blueGradient = "linear-gradient(to left, #6CD4FF, #8B80F9)";
	const greenGradient = "linear-gradient(to left, #2adedf, #2fe382)";

	return (
		<div className='w-100 h-100'>
			<TitleBar title='Home' />
			<About />
		</div>
	);
}
