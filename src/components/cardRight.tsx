import React from "react";
import Carousel from "./carousel.component";
import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const CardRight = ({
	slides,
	gh,
	site,
}: { slides: string[]; gh: boolean | string; site: boolean | string }) => {
	return (
		<div className="flex flex-col-reverse lg:flex-row sm:h-[88rem] lg:h-[36.5rem] w-full justify-center items-center my-4">
			<div className="w-1/2 flex flex-col items-center justify-end sm:text-center lg:text-right h-fit mb-8 px-6">
				<h1 className="text-6xl">CRWN Clothing - Online Shopping Store</h1>
				<p className="sm:hidden lg:block p-6 text-gray-900 ">
					CRWN Clothing is an full-fledge e-commerce website made with React,
					Redux, Styled Components and other packages related to React. The app
					is connected to Firebase as a backend for user autheticaion and
					storage.
				</p>
				<div className="flex sm:gap-10 lg:gap-4 w-full px-6 sm:justify-center lg:justify-end sm:mb-32 lg:mb-0">
					{site && (
						<Link
							to={`${site}`}
							target="_blank"
							className="hover:text-teal-800"
						>
							<TbWorldWww className="sm:w-20 sm:h-20 sm:mt-12 lg:mt-0 lg:w-8 lg:h-8" />
						</Link>
					)}
					{gh && (
						<Link to={`${gh}`} target="_blank" className="hover:text-teal-800">
							<FaGithub className="sm:w-20 sm:h-20 sm:mt-12 lg:mt-0 lg:w-8 lg:h-8" />
						</Link>
					)}
				</div>
			</div>
			<div className="sm:w-3/4 lg:w-1/2 flex justify-center h-full my-16">
				<div className="shadow-gray-600 shadow-2xl sm:w-[40rem] lg:w-[28rem]">
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
