import { use } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        return setTheme((prevThem=> prevThem === "dark" ? "light" : "dark" ));
    };


    return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
};

//  Creating a component:
export const DarkLight = ()=> {

    const {theme, handleToggleTheme} = use(ThemeContext);
    return (
    <div className="">
        <h1>Dark Light Mode Website</h1>
        <p> Hello!! My React</p>
        <button onClick={handleToggleTheme}> 
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    </div>
    );
};

// 16:22