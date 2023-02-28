import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProp {
    classname?: string;
}

export const Navbar = ({ classname }: NavbarProp) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(
        () => {
            setIsAuthModal(false);
        },
        [],
    );

    const onToggleModal = useCallback(
        () => {
            setIsAuthModal(true);
        },
        [],
    );

    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
