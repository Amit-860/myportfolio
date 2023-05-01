import React, { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import TransitionEffect from "./transitionEffect.component";
import { FaLinkedinIn } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";

const Icons = ({
	props,
	optStyles,
}: { props?: object; optStyles?: string }) => {
	const { theme, setTheme } = useContext(ThemeContext);
	const handleClick = () => setTheme((prevTheme) => !prevTheme);
	return (
		<div
			className={`sm:absolute lg:static sm:right-1 sm:top-10 flex sm:gap-6 flex-col lg:flex-row lg:gap-4 ${optStyles}`}
		>
			<FaLinkedinIn
				size={"1.5rem"}
				className="sm:ml-0 lg:ml-auto cursor-pointer hover:text-teal-700 sm:w-24 sm:h-24 lg:h-6 lg:w-6"
			/>
			<FiGithub
				size={"1.5rem"}
				className="cursor-pointer hover:text-teal-700 sm:w-24 sm:h-24 lg:h-6 lg:w-6"
			/>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={handleClick}>
				{theme ? <TransitionEffect /> : ""}
				{theme ? "" : <TransitionEffect />}
				<div
					className={` h-24 w-24  rounded-2xl lg:rounded-md lg:-mt-1 ${
						theme
							? "bg-slate-200 hover:bg-gray-950 hover:text-slate-200 hover:shadow-gray-500 hover:shadow-2xl"
							: "bg-gray-950 text-white hover:bg-slate-200 hover:text-gray-950 hover:shadow-gray-500 hover:shadow-2xl"
					}  flex items-center justify-center lg:w-8 lg:h-8`}
				>
					{theme ? (
						<BiMoon
							size={"1.5rem"}
							className="cursor-pointer sm:w-16 sm:h-16 lg:h-6 lg:w-6"
						/>
					) : (
						<FiSun
							size={"1.5rem"}
							className="cursor-pointer sm:w-16 sm:h-16 lg:h-6 lg:w-6"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Icons;
