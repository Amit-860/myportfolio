import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export interface ICarouselProps {
	children: JSX.Element[];
	autoSlide?: boolean;
	autoSlideInterval?: number;
}

export default function Carousel({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}: ICarouselProps) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);
	return (
		<div className="overflow-hidden relative">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{slides}
			</div>
			<div className="absolute inset-0 flex items-center justify-between px-4 py-1">
				<button
					type="button"
					onClick={prev}
					className="sm:px-4 sm:py-8 lg:py-1 lg:px-0 rounded-sm shadow-2xl bg-white/40 text-gray-700 hover:bg-white/60"
				>
					<BsChevronCompactLeft size={40} />
				</button>
				<button
					type="button"
					onClick={next}
					className="sm:px-4 sm:py-8 lg:py-1 lg:px-0 rounded-sm shadow-2xl bg-white/40 text-gray-700 hover:bg-white/60"
				>
					<BsChevronCompactRight size={40} />
				</button>
			</div>

			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((v: JSX.Element, i: number) => (
						<div
							key={`${i}`}
							className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
