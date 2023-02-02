import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeConext} from "./ThemeContext";
import {useContext} from "react";

interface  UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

//хук для смены темы, чтобы можно было пользоваться где угодно
export const useTheme = ():UseThemeResult => {
    //вытаскиваем из контекста нужные данные для темы
    const { theme, setTheme} = useContext(ThemeConext);

    // ф-я для переключения темы
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme
    }
}
