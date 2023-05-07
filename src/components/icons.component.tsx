import React, { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import TransitionEffect from "./transitionEffect.component";
import { FaLinkedinIn } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

const Icons = ({
	props,
	optStyles,
}: { props?: object; optStyles?: string }) => {
	const { theme, setTheme } = useContext(ThemeContext);
	const handleClick = () => setTheme((prevTheme) => !prevTheme);
	return (
		<div
			className={`flex gap-3 flex-row justify-end items-center mt-1 md:mt-0 md:gap-6 ${optStyles}`}
		>
			<Link
				to="https://www.linkedin.com/in/amit-bhagat-410382212/"
				target="_blank"
			>
				<FaLinkedinIn className="md:mt-1 cursor-pointer hover:text-teal-700 w-10 h-10 md:h-6 md:w-6 text-2xl" />
			</Link>
			<Link to="https://github.com/Amit-860?tab=repositories" target="_blank">
				<FiGithub className="cursor-pointer md:mt-1 hover:text-teal-700 w-10 h-10 md:h-6 md:w-6 text-2xl" />
			</Link>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={handleClick}>
				{theme ? <TransitionEffect /> : ""}
				{theme ? "" : <TransitionEffect />}
				<div
					className={`h-12 w-12 md:h-10 md:w-10 rounded-lg -mt-1 ${
						theme
							? "bg-slate-200 hover:bg-gray-950 shadow-gray-400 shadow-md border-gray-200 border-2 hover:shadow-black hover:shadow-md hover:border-black hover:border-2 hover:text-slate-200"
							: "bg-gray-950 border-gray-950 border-2 text-white shadow-black shadow-md hover:border-gray-200 hover:border-2 hover:bg-slate-200 hover:text-gray-950 hover:shadow-gray-400 hover:shadow-md"
					} flex items-center justify-center`}
				>
					{theme ? (
						<BiMoon className="cursor-pointer text-2xl" />
					) : (
						<FiSun className="cursor-pointer text-2xl" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Icons;
