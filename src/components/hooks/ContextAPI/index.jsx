// V64.1: Context API & useContext Hook in ReactJs.
import { createContext } from "react";

// 1 Step
export const BioContext = createContext ();

//2nd Step

export const BioProvider = () => {
    const myName = "Avinash"
    return <BioContext.Provider value={myName}>

    </BioContext.Provider>
};

// 08:00