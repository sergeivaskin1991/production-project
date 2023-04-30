import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import {
    getArticlesPageHasMore, getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = useSelector(getArticlesPageInited);

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
