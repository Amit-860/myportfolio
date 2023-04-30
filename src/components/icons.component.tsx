import React, { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import TransitionEffect from "./transitionEffect.component";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";
import { BiSun } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

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
				{theme ? (
					<HiOutlineMoon
						size={"1.5rem"}
						className="cursor-pointer hover:text-teal-700 sm:w-24 sm:h-24 lg:h-6 lg:w-6"
					/>
				) : (
					<BiSun
						size={"1.5rem"}
						className="cursor-pointer hover:text-teal-700 sm:w-24 sm:h-24 lg:h-6 lg:w-6"
					/>
				)}
			</div>
		</div>
	);
};

export default Icons;
