import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProp {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProp) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {
                isEdit
                    ? t('Редактирование статьи с ID = ') + id
                    : t('Создаие новой статьи')
            }
        </Page>
    );
};

export default ArticleEditPage;
