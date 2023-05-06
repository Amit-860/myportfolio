import React from "react";
import skills from "../assets/skill_logo.png";

const HireMe = () => {
	return (
		<div className="hidden fixed md:flex h-44 w-44 justify-center items-center left-12 bottom-20">
			<img
				src={skills}
				alt="skills text"
				className="relative animate-spin-slow"
			/>
			<div
				className="bg-gray-950 absolute h-20 w-20 rounded-full flex items-center justify-center
            shadow-black shadow-md cursor-pointer"
			>
				<a href="mailto:amitbhagat860@gmail.com">
					<span className="text-white font-semibold">Hire Me</span>
				</a>
			</div>
		</div>
	);
};

export default HireMe;
