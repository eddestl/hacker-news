import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import ThemeContext from "../contexts/ThemeContxt";
import { useContext } from "react";

const HomePage = () => {

	const themeContext  = useContext(ThemeContext);
	if(!themeContext){
		throw Error("Trying to use theme context outside of ThemeContextProvider!");
	}
	

	
	return (
		<>
			<h1>Welcome to Hacker News 🕵🏻‍♂️🤓👀!</h1>

			<p>Your theme is: {themeContext.isDarkMode ? "dark" : "light"}</p>
			<Button
				onClick={() => themeContext.toggleTheme()}
				>Toggle theme!

			</Button>

			<Link to="/search">
				<Button variant="primary">Use the Search, you must!</Button>
			</Link>
		</>
	)
}

export default HomePage;
