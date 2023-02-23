import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

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
    ]);

    return element;
};

export default Router;
