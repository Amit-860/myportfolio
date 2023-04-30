import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout.component";

import Home from "./routes/home.route";
import About from "./routes/about.route";
import Projects from "./routes/projects.route";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
			</Route>
		</Routes>
	);
}

export default App;
