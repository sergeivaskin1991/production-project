import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeConext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

// хук для смены темы, чтобы можно было пользоваться где угодно
export const useTheme = ():UseThemeResult => {
    // вытаскиваем из контекста нужные данные для темы
    const { theme, setTheme } = useContext(ThemeConext);

    // ф-я для переключения темы
    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.BROWN;
            break;
        case Theme.BROWN:
            newTheme = Theme.DARK;
            break;

        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
