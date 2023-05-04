import React from "react";
import Carousel from "./carousel.component";
import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const CardRight = ({
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
		<div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
			<div
				className="w-full md:w-4/6 flex flex-col items-center justify-center text-center
			 md:text-right h-fit mb-8 px-4 md:px-16"
			>
				<h1 className="text-4xl md:text-6xl">{title}</h1>
				<p className="p-4 text-lg text-gray-900 ">{description}</p>
				<div className="flex gap-4 w-full px-6 justify-center md:justify-end">
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
				</div>
			</div>
			<div className="w-5/6 m-20 md:w-4/12 flex justify-center my-16">
				<div className="shadow-gray-600 shadow-2xl">
					<Carousel>
						{slides.map((img) => (
							<img
								src={img}
								alt=""
								key={img.slice(10, 15)}
								className="rounded-md object-contain"
							/>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default CardRight;
