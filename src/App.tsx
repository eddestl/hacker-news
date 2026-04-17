import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Navigation from "./pages/partials/Navigation";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import "./assets/scss/App.scss";
import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContxt";

function App() {
	const themeContext = useContext(ThemeContext);
		if(!themeContext){
		throw Error("Trying to use theme context outside of ThemeContextProvider!");
	}


	return (
		<>
		<div id="App" className={themeContext.isDarkMode ? "" : "bg-white text-black"}>
			<Navigation />

			<Container className="py-4">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/search" element={<SearchPage />} />

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>

			<ToastContainer
				autoClose={3000}
				closeOnClick={true}
				limit={5}
				newestOnTop={true}
				position="top-right"
				// stacked={true}
				theme="colored"
			/>
			</div>
		</>
	);
}

export default App;
