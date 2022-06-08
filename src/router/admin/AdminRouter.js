import Dashboard from '../../views/admin/Mydashboard';

//child router in admin
import CountryRouter from './CountryRouter';
import DistrictRouter from './DistrictRouter';
import DivisionRouter from './DivisionRouter';
import PostOfficeRouter from './PostOfficeRouter';
import ThanaRouter from './ThanaRouter';
import UnionRouter from './UnionRouter';
import VillageRouter from './VillageRouter';

export default[
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../../views/admin/Home.vue')
            },

            ...CountryRouter,
            ...DistrictRouter,
            ...DivisionRouter,
            ...ThanaRouter,
            ...UnionRouter,
            ...VillageRouter,
            ...PostOfficeRouter
        ]
    }
]