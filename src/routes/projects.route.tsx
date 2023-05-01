import React from "react";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";

const slides = [
	"https://i.ibb.co/ncrXc2V/1.png",
	"https://i.ibb.co/B3s7v4h/2.png",
	"https://i.ibb.co/XXR8kzF/3.png",
	"https://i.ibb.co/yg7BSdM/4.png",
];

const Projects = () => {
	return (
		<div className="flex flex-col sm:w-screen lg:w-10/12 mx-auto justify-center mb-6">
			<CardRight
				{...{
					slides: slides,
					gh: "https://github.com/Amit-860/crwn-clothing-prev/",
					site: "https://grand-croquembouche-2e37e8.netlify.app/",
				}}
			/>
			<CardLeft
				{...{
					slides: slides,
					gh: "https://github.com/Amit-860/crwn-clothing-prev/",
					site: false,
				}}
			/>
		</div>
	);
};

export default Projects;
