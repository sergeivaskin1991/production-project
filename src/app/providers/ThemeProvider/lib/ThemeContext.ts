import { createContext } from 'react';

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
}

export interface ThemeConextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeConext = createContext<ThemeConextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
