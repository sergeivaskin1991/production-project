import React, {FC, useMemo, useState} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeConext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
    //инициализируем тему
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // мемоизируем объект, чтобы вернуть тоже самое, если ничего не изменилось
    const defaultProps = useMemo(() => ({
        theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeConext.Provider value={defaultProps}>
            {children}
        </ThemeConext.Provider>
    );
};

export default ThemeProvider;
