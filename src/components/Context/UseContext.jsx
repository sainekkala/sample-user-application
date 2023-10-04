import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ContextProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme")|| 'light');

    useEffect(() => {
        localStorage.setItem('theme' , theme);
    },[])

    const values = {
        theme,setTheme
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
};

 export const useTheme = () => useContext(ThemeContext);
