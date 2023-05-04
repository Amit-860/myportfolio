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
		<div className="container md:mx-auto -my-6 pb-10 pt-6 md:pt-0 flex flex-col justify-center mb-6">
			<CardRight
				{...{
					slides: slides,
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
					slides: slides,
					gh: "https://github.com/Amit-860/crwn-clothing-prev/",
					site: false,
					title: "Manage - Team & Product Managment App",
					description: `Manage - team & product management app, built with React and styled
					with Tailwind CSS, offers a modern and intuitive interface for teams
					to collaborate and manage their projects. With its robust features and
					user-friendly design, it streamlines workflow and helps teams achieve
					their goals.`,
				}}
			/>
		</div>
	);
};

export default Projects;
