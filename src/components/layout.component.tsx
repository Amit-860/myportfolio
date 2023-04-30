import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header.component";
import Footer from "./footer.component";

const Layout = () => {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-start">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default Layout;
