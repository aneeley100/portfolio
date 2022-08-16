import { useEffect, useRef } from "react";
import { TitleBar } from "../components";
import { About } from "../sections";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
	const containerRef = useRef();

	// useEffect(() => {
	// 	gsap.to(containerRef.current, {
	// 		x: () =>
	// 			-(
	// 				containerRef.current.scrollWidth -
	// 				document.documentElement.clientWidth
	// 			) + "px",
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: containerRef.current,
	// 			invalidateOnRefresh: true,
	// 			pin: true,
	// 			scrub: 1,
	// 			end: () => "+=" + containerRef.current.offsetWidth,
	// 		},
	// 	});
	// }, []);

	return (
		<div className='w-100 h-100 flex flex-row space-x-16' ref={containerRef}>
			<TitleBar />
			<About />
		</div>
	);
}
