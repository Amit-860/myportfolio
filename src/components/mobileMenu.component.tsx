import React, { useContext } from "react";
import { MenuContext } from "../context/menu.context";
import { Link } from "react-router-dom";
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
		<div className="w-full md:hidden">
			{isOpen ? (
				<>
					<div className="flex items-center justify-between">
						<IoClose className="h-12 w-12 z-40" onClick={toggelMenu} />
					</div>
					<div className="absolute top-4 left-0 w-screen px-3 z-20">
						<ul
							className="font-medium flex flex-col gap-6 items-center text-2xl 
						drop-shadow-2xl py-8 rounded-lg text-gray-600 backdrop-blur-md
						 border-gray-200 border-[1px] bg-gray-200/70"
						>
							<li className={style}>
								<Link to="/" onClick={toggelMenu}>
									Home
								</Link>
							</li>
							<li className={style}>
								<Link to="/projects" onClick={toggelMenu}>
									Projects
								</Link>
							</li>
							<li className={style}>
								<Link to="/about" onClick={toggelMenu}>
									About
								</Link>
							</li>
						</ul>
					</div>
				</>
			) : (
				<>
					<div className="flex items-center justify-between">
						<FiMenu className="h-10 w-10" onClick={toggelMenu} />
					</div>
				</>
			)}
			<div className="z-50 fixed bottom-10 right-10 h-20 w-20 shadow-black shadow-md bg-gray-950 text-slate-100 text-3xl flex items-center justify-center rounded-full">
				<Link to="/about">AB</Link>
			</div>
		</div>
	);
};

export default MobileMenu;
