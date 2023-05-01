import React, { useContext } from "react";
import { MenuContext } from "../context/menu.context";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const MobileMenu = () => {
	const { isOpen, setIsOpen } = useContext(MenuContext);
	const style =
		"hover:underline hover:underline-offset-8 decoration-teal-700 decoration-2";
	const toggelMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="lg:hidden w-full">
			{isOpen ? (
				<>
					<div className="flex items-center justify-between">
						<IoClose
							size="1.5rem"
							className="h-20 w-20 lg:hidden"
							onClick={toggelMenu}
						/>
						<div className="h-36 w-36 shadow-black shadow-2xl bg-gray-950 text-slate-100 text-5xl flex items-center justify-center rounded-full">
							AB
						</div>
						<div className="w-20" />
					</div>
					<div className="absolute top-36 lg:hidden w-full drop-shadow-2xl z-20 py-14 rounded-xl text-gray-900 backdrop-blur-md bg-white/75">
						<ul className="flex flex-col gap-14 items-center text-4xl font-semibold">
							<li className={style}>Home</li>
							<li className={style}>Projects</li>
							<li className={style}>About</li>
						</ul>
					</div>
				</>
			) : (
				<>
					<div className="flex items-center justify-between">
						<FiMenu
							size="1.5rem"
							className="h-20 w-20 lg:hidden"
							onClick={toggelMenu}
						/>
						<div className="h-36 w-36 shadow-black shadow-md bg-gray-950 text-slate-100 text-5xl flex items-center justify-center rounded-full">
							AB
						</div>
						<div className="w-20" />
					</div>
				</>
			)}
		</div>
	);
};

export default MobileMenu;
