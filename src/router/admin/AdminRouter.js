import Dashboard from '../../views/admin/Mydashboard';

//child router in admin
import CountryRouter from './CountryRouter';

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

            ...CountryRouter
        ]
    }
]