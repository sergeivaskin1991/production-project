import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/Applink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProp {
    classname?: string;
}

export const Navbar = ({ classname }: NavbarProp) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
