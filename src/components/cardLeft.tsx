import React from "react";
import Carousel from "./carousel.component";
import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const CardLeft = ({
	slides,
	gh,
	site,
}: { slides: string[]; gh: boolean | string; site: boolean | string }) => {
	return (
		<div className="flex flex-col lg:flex-row sm:h-[88rem] lg:h-[36.5rem] w-full justify-center items-center my-4">
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
			<div className="w-1/2 flex flex-col items-center justify-start sm:text-center lg:text-left h-fit mb-8 px-6">
				<h1 className="text-6xl">Manage - Team & Product Managment App</h1>
				<p className="sm:hidden lg:block p-6 text-gray-900 ">
					Manage - team & product management app, built with React and styled
					with Tailwind CSS, offers a modern and intuitive interface for teams
					to collaborate and manage their projects. With its robust features and
					user-friendly design, it streamlines workflow and helps teams achieve
					their goals.
				</p>
				<div className="flex sm:gap-10 lg:gap-4 w-full px-6 sm:justify-center lg:justify-start sm:mb-32 lg:mb-0">
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
		</div>
	);
};

export default CardLeft;
