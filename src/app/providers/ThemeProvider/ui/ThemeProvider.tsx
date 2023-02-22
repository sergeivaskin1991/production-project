import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme, ThemeConext,
} from '../lib/ThemeContext';

const defaultTheme = localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    // инициализируем тему
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    // мемоизируем объект, чтобы вернуть тоже самое, если ничего не изменилось
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeConext.Provider value={defaultProps}>
            {children}
        </ThemeConext.Provider>
    );
};

export default ThemeProvider;
