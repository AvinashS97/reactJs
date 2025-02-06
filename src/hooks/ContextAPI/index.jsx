// V64.1: Context API & useContext Hook in ReactJs.
import { createContext, useContext } from "react";

// 1 Step
export const BioContext = createContext();

//2nd Step

export const BioProvider = ({ children }) => {
    const myName = "Avinash";
    const myAge = 23;
    console.log(children);
    
    return <BioContext.Provider value={{ myName, myAge }}>
        {children}
    </BioContext.Provider>
};

// Custom Hooks
export const useBioContext = () => {
    const context = useContext(BioContext);
    if(context === undefined){
        throw new Error("Component must be wrapped with BioProvider.")
    }
    return context;
};
