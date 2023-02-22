import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Simulate } from 'react-dom/test-utils';
import cls from './Navbar.module.scss';
import input = Simulate.input;

interface NavbarProp {
    classname?: string;
}

export const Navbar = ({ classname }: NavbarProp) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(
        () => {
            setIsAuthModal((prev) => !prev);
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
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid at, consequuntur eius enim eos illum inventore libero nisi possimus,')}
            </Modal>
        </div>
    );
};
