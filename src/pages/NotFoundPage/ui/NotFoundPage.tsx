import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProp {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProp) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
});
