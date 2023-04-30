import React, {
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

export interface ITheme {
	theme: boolean;
	setTheme: Dispatch<SetStateAction<boolean>>;
}

interface IProps {
	children: JSX.Element;
}

export const ThemeContext = createContext<ITheme>({
	theme: false,
	setTheme: () => null,
});

export const ThemeProvider = ({ children }: IProps) => {
	const [theme, setTheme] = useState<boolean>(false);
	const value: ITheme = { theme, setTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
