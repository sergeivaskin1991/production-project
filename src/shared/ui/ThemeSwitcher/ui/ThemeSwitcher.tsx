import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './ThemeSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProp {
    classname?: string;
}

export const ThemeSwitcher = ({classname}: ThemeSwitcherProp) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [classname])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};
