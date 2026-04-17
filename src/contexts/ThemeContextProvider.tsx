import React, { useState } from 'react'
import ThemeContext from './ThemeContxt'

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

const ThemeContextProvider:React.FC<ThemeContextProviderProps> =({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider