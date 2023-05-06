import React from "react";
import Menu from "./menu.component";
import MobileMenu from "./mobileMenu.component";
import Initials from "./initials.component";
import Icons from "./icons.component";

const Header = () => {
	return (
		<div className="container mx-auto flex relative place-content-between items-center h-24 md:h-32 pt-2 px-4 md:px-20">
			<MobileMenu />
			<Menu />
			<Initials initials="AB" optStyles="" />
			<Icons optStyles="md:w-52" />
		</div>
	);
};

export default Header;
