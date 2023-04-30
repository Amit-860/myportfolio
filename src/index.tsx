import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/theme.context";
import { MenuProvider } from "./context/menu.context";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<MenuProvider>
					<App />
				</MenuProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
