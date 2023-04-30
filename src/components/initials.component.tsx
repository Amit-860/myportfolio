import React from "react";

interface IInitialsProps {
	initials: string;
	optStyles?: string;
}

const Initials = ({ initials, optStyles }: IInitialsProps) => {
	return (
		<div
			className={`hidden lg:flex z-10 rounded-full text-stone-50 text-2xl bg-black h-16 w-16 justify-center items-center shadow-black shadow-md
			hover:border-gray-200 hover:border-2 cursor-pointer hover:text-gray-600 hover:bg-slate-100 hover:shadow-gray-400 ${optStyles}`}
		>
			{initials}
		</div>
	);
};

export default Initials;
