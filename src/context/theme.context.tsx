import React, {
	createContext,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
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

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	useEffect(() => {
		if (theme) {
			// Whenever the user explicitly chooses dark mode
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
		} else {
			// Whenever the user explicitly chooses light mode
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
		}

		// Whenever the user explicitly chooses to respect the OS preference
		// localStorage.removeItem("theme");
	}, [theme]);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
