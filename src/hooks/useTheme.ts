import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContxt";

	const useTheme = () => {
		const themeContext = useContext(ThemeContext);
			if(!themeContext){
				throw Error("Trying to use theme context outside of ThemeContextProvider!");
	}
	return themeContext;

	}
export default useTheme;