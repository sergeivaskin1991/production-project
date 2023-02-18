import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeConextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeConext = createContext<ThemeConextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
