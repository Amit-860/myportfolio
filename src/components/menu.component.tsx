import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ props, optStyles }: { props?: object; optStyles?: string }) => {
	const location = useLocation();
	return (
		<ul className="hidden md:flex gap-8 text-lg font-semibold">
			<li
				className={`${
					location.pathname === "/"
						? "underline underline-offset-8 decoration-2 decoration-teal-700"
						: ""
				}
					hover:underline hover:underline-offset-8 decoration-teal-700`}
			>
				<Link to="/">Home</Link>
			</li>
			<li
				className={`${
					location.pathname === "/projects"
						? "underline underline-offset-8 decoration-2 decoration-teal-700"
						: ""
				}
					hover:underline hover:underline-offset-8 decoration-teal-700`}
			>
				<Link to="/projects">Projects</Link>
			</li>
			<li
				className={`${
					location.pathname === "/about"
						? "underline underline-offset-8 decoration-2 decoration-teal-700"
						: ""
				}
					hover:underline hover:underline-offset-8 decoration-teal-700`}
			>
				<Link to="/about">About</Link>
			</li>
		</ul>
	);
};

export default Menu;
