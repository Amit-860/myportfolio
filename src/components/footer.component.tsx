import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="h-12 text-xs mt-auto">
			<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
			<div className="flex justify-center items-center">
				2023
				<span className="mx-1">
					<AiOutlineCopyrightCircle />
				</span>
				| Made with React.JS
				<span className="mx-1">
					<GrReactjs className="text-teal-800 text-sm" />
				</span>
				and TailwindCSS
				<span className="mx-1">
					<SiTailwindcss className="text-blue-900 text-sm" />
				</span>
			</div>
		</div>
	);
};

export default Footer;
