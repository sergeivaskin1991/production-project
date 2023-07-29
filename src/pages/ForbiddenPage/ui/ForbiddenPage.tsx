import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProp {
    className?: string;
}

export const ForbiddenPage = ({ className }: ForbiddenPageProp) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
};
