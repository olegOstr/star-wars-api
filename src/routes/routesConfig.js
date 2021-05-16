import HomePage from '../pages/HomePage/HomePage';
import PeoplePage from '../pages/PeoplePage/PeoplePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PersonPage from '../pages/PersonPage/PersonPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';

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
        path: '/people/:id',
        exact: true,
        component: PersonPage
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritePage
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