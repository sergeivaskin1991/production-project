import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {AboutPageAsync} from "./AboutPage/AboutPage.async";
import {MainPageAsync} from "./MainPage/MainPage.async";

import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    //достаем из хука нужные данные для переключения темы
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to ={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
