import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContxt";
import { Button } from "react-bootstrap";

const Navigation = () => {
	const themeContext = useContext(ThemeContext);
		if(!themeContext){
		throw Error("Trying to use theme context outside of ThemeContextProvider!");
	}

	return (
		<Navbar bg="dark" variant="dark" expand="sm">
			<Container>
				<Navbar.Brand as={Link} to="/">🕵🏻‍♂️ Hacker News</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/search">Search</Nav.Link>
					</Nav>
				<Button
				onClick={themeContext.toggleTheme}
				variant="outline-secondary">
					{themeContext.isDarkMode ? "light" : "dark"}
				</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation;
