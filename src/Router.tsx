import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import MyPage from 'pages/MyPage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IRouterProps {}

const Router: React.FunctionComponent<IRouterProps> = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/movie/:id',
            element: <Detail />,
        },
        {
            path: '/signup',
            element: <Signup />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/logout',
            element: <Logout />,
        },
        {
            path: '/@:id',
            element: <MyPage />,
        },
    ]);

    return element;
};

export default Router;
