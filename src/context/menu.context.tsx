import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface IMenu {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<IMenu>({
	isOpen: false,
	setIsOpen: () => null,
});

export const MenuProvider = ({ children }: { children: JSX.Element }) => {
	const [isOpen, setIsOpen] = useState(false);
	const value = {
		isOpen,
		setIsOpen,
	};
	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
