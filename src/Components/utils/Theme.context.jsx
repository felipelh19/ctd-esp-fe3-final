import { useState, createContext } from "react";


export const ThemeContext = createContext(undefined);

export const ContextProviderTheme = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [theme, setTheme] = useState('light');

    function changeTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const value = {
        theme,
        changeTheme
    }

    return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
    );
};
