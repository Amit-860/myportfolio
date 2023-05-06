import React from "react";
import { motion } from "framer-motion";

const Skill = ({
	name,
	x,
	y,
	optStyle,
}: { name: string; x: string; y: string; optStyle?: string }) => {
	return (
		<motion.div
			className={`flex cursor-pointer items-center justify-center rounded-full 
            font-semibold bg-gray-950 text-white  shadow-black absolute
            lg:py-3 lg:px-6 md:py-1.5 md:px-3 px-2 py-1 ${optStyle}`}
			whileHover={{ scale: 1.1 }}
			initial={{
				x: 0,
				y: 0,
			}}
			animate={{
				x: x,
				y: y,
			}}
			transition={{
				duration: 1,
			}}
		>
			{name}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<h2 className="font-semibold text-6xl md:text-8xl mt-28 w-full text-center pb-8">
				Skills
			</h2>
			<div
				className="w-[30rem] h-[25rem] relative flex items-center justify-center rounded-full
            bg-circularLightSm md:bg-circularLight lg:h-[60rem] lg:w-[75rem] md:h-[44rem]"
			>
				<motion.div
					className="flex cursor-pointer items-center justify-center rounded-full font-semibold bg-gray-950 text-white
					lg:p-8 md:p-4 p-2 shadow-black"
					whileHover={{ scale: 1.05 }}
				>
					web
				</motion.div>
				<Skill name="CSS" x="-6vw" y="-12vw" optStyle="" />
				<Skill name="Python" x="-8vw" y="12vw" optStyle="" />
				<Skill name="Javascript" x="-20vw" y="0vw" optStyle="" />
				<Skill name="Typescript" x="8vw" y="-18vw" optStyle="" />
				<Skill name="redux" x="24vw" y="-20vw" optStyle="" />
				<Skill name="redux-saga" x="-15vw" y="-24vw" optStyle="" />
				<Skill name="FastAPI" x="22vw" y="-7vw" optStyle="" />
				<Skill name="Styled Component" x="24vw" y="5vw" optStyle="" />
				<Skill name="Git/Github" x="-28vw" y="-10vw" optStyle="" />
				<Skill name="HTML" x="-26vw" y="10vw" optStyle="" />
				<Skill name="TailwindCSS" x="-4vw" y="26vw" optStyle="" />
				<Skill name="MongoDB" x="10vw" y="18vw" optStyle="" />
			</div>
		</>
	);
};

export default Skills;
