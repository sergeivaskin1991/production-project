import React, { Suspense } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import  { Navbar } from "widgets/Navbar";

import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";


const App = () => {
    //достаем из хука нужные данные для переключения темы
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='' >
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
