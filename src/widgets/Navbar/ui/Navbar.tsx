import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";

import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/Applink/AppLink";

interface NavbarProp {
    classname?: string;
}

export const Navbar = ({classname}: NavbarProp) => {
    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to ={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
