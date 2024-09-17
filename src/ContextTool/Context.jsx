import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) =>{
    const myName = "Nayan";
    const age =19
    return <BioContext.Provider value={{myName , age}}>{children}</BioContext.Provider>
    
   
};
