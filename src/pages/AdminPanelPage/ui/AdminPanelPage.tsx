import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProp {
    className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProp) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
