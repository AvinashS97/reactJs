import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    return (
    <ThemeContext.Provider value={{ theme }}>
        {children}
    </ThemeContext.Provider>
    );
};

//  Creating a component:
export const DarkLight = ()=> {
    return (
    <div>
        <h1>Dark Light Mode Website</h1>
        <p> Hello!! My React</p>
        <button onClick={handleToggleTheme}> Switch to Light Mode</button>
    </div>
    );
};