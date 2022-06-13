import Season from '../../views/admin/Season/Season';
import AddSeason from '../../views/admin/Season/AddSeason';
export default[
    {
        path:'season',
        name: 'Season',
        component: Season
    },
    {
        path:'addseason',
        name:'AddSeason',
        component: AddSeason
    },
    {
        path: 'edit_seasion/:id',
        name: 'EditSeason',
        component: () => import('../../views/admin/Season/EditSeason.vue')
    }
]
