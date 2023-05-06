import React from "react";
import { motion } from "framer-motion";

const qoute = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.7,
			staggerChildren: 0.25,
		},
	},
};

const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const AnimatedText = ({
	text,
	optStyle,
}: { text: string; optStyle?: string }) => {
	return (
		<div className="w-full mx-auto py-2 flex items-center justify-center text-center">
			<motion.h1
				variants={qoute}
				initial="initial"
				animate="animate"
				className={`w-full flex flex-wrap ${optStyle}`}
			>
				{text.split(" ").map((word, index) => (
					<motion.span variants={singleWord} key={`${word} ${index}`}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
