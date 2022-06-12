import Village from '../../views/admin/VillageLocation/Village';
import AddVillage from '../../views/admin/VillageLocation/AddVillage';
export default[
    {
        path:'village',
        name: 'Village',
        component: Village
    },
    {
        path:'add_village',
        name:'AddVillage',
        component: AddVillage
    }
]