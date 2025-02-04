// V64.1: Context API & useContext Hook in ReactJs.
import { createContext } from "react";

// 1 Step
export const BioContext = createContext ();

//2nd Step

export const BioProvider = ({children}) => {
    const myName = "Avinash";
    const myAge = 23;
    console.log(children);
    
    return <BioContext.Provider value={{myName, myAge}}>{children}</BioContext.Provider>
};
