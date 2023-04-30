import React from "react";
import Menu from "./menu.component";
import MobileMenu from "./mobileMenu.component";
import Initials from "./initials.component";
import Icons from "./icons.component";

const Header = () => {
	return (
		<div className="flex relative place-content-between items-center pt-2 lg:h-24 mx-6 lg:mx-20 sm:h-40">
			<Menu optStyles="w-32" />
			<MobileMenu />
			<Initials initials="AB" optStyles="" />
			<Icons optStyles="lg:w-32" />
		</div>
	);
};

export default Header;
