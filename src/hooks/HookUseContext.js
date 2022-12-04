import { createContext, useCallback, useState } from "react";

export const ValueContext = createContext();

export const HookUseContext = ({ children }) => {
    
    const [ showValues, setShowValues ] = useState(true);
    
    const handleState = useCallback(() => {
        setShowValues(!showValues);
    });

    return (
        <ValueContext.Provider value={{ showValues, handleState }}>
            {children}
        </ValueContext.Provider>
    );
}