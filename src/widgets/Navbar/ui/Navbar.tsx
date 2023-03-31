import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProp {
    classname?: string;
}

export const Navbar = ({ classname }: NavbarProp) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(
        () => {
            setIsAuthModal(false);
        },
        [],
    );

    const onShowModal = useCallback(
        () => {
            setIsAuthModal(true);
        },
        [],
    );

    const onLogOut = useCallback(
        () => {
            dispatch(userActions.logOut());
        },
        [dispatch],
    );

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [classname])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onLogOut}
                    className={cls.links}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onShowModal}
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
