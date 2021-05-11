import HomePage from '../pages/HomePage/HomePage';
import PeoplePage from '../pages/PeoplePage/PeoplePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    },
];

export default routesConfig;