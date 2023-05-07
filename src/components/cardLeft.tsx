import React from "react";
import Carousel from "./carousel.component";
import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import AnimatedText from "./animationText.component";

const CardLeft = ({
	slides,
	gh,
	site,
	title,
	description,
}: {
	slides: string[];
	gh: boolean | string;
	site: boolean | string;
	title: string;
	description: string;
}) => {
	return (
		<div className="w-full flex flex-col lg:flex-row justify-center items-center">
			<div className="w-5/6 lg:m-10 lg:w-8/12 flex justify-center py-12 md:py-6">
				<div className="shadow-gray-600 shadow-2xl">
					<Carousel autoSlide={true}>
						{slides.map((img) => (
							<img
								src={img}
								alt=""
								key={img.slice(10, 15)}
								className="rounded-sm object-contain"
							/>
						))}
					</Carousel>
				</div>
			</div>
			<div className="w-full lg:w-4/6 flex flex-col items-center justify-center text-center lg:text-left h-fit">
				<AnimatedText
					text={title}
					optStyle="text-4xl md:text-5xl justify-center lg:!justify-start"
				/>
				<p className="p-4 text-lg text-gray-900 ">{description}</p>
				<div className="flex gap-4 w-full px-4 items-center justify-center lg:justify-start">
					{site && (
						<Link
							to={`${site}`}
							target="_blank"
							className="hover:text-teal-800"
						>
							<TbWorldWww className="w-10 h-10 mt-2 md:mt-0 md:w-8 md:h-8" />
						</Link>
					)}
					{gh && (
						<Link to={`${gh}`} target="_blank" className="hover:text-teal-800">
							<FaGithub className="w-10 h-10 mt-2 md:mt-0 md:w-8 md:h-8" />
						</Link>
					)}
					<BsArrowLeft className="hidden lg:block" />
					<h4 className="hidden lg:block">Visit Now</h4>
				</div>
			</div>
		</div>
	);
};

export default CardLeft;
