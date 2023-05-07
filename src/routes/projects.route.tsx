import React from "react";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import crwn_1 from "../assets/crwn_1.png";
import crwn_2 from "../assets/crwn_2.png";
import crwn_3 from "../assets/crwn_3.png";
import crwn_4 from "../assets/crwn_4.png";
import crwn_5 from "../assets/crwn_5.png";
import manage_1 from "../assets/manage_1.png";
import manage_2 from "../assets/manage_2.png";
import manage_3 from "../assets/manage_3.png";
import manage_4 from "../assets/manage_4.png";

const crwnSlides = [crwn_1, crwn_2, crwn_3, crwn_4, crwn_5];
const manageSlides = [manage_1, manage_2, manage_3, manage_4];

const Projects = () => {
	return (
		<div className="container lg:px-24 md:mx-auto pb-10 px-2 md:pt-0 flex flex-col justify-center mb-6">
			<CardRight
				{...{
					slides: crwnSlides,
					gh: "https://github.com/Amit-860/crwn-clothing-prev/",
					site: "https://grand-croquembouche-2e37e8.netlify.app/",
					title: "CRWN Clothing - Online Shopping Store",
					description: `CRWN Clothing is an full-fledge e-commerce website made with React, 
						Redux, Styled Components and other packages related to React. 
						The app is connected to Firebase as a backend for user 
						autheticaion and storage.`,
				}}
			/>
			<CardLeft
				{...{
					slides: manageSlides,
					gh: "https://github.com/Amit-860/landing-page",
					site: false,
					title: "Manage - Team & Product Managment App",
					description: `Manage - team & product management app, built with React and styled
					with Tailwind CSS, offers a modern and intuitive interface for teams
					to collaborate and manage their projects.`,
				}}
			/>
		</div>
	);
};

export default Projects;
