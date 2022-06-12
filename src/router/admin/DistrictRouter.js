import District from '../../views/admin/DistrictLocation/District';
import AddDistrict from '../../views/admin/DistrictLocation/AddDistrict';
export default[
    {
        path:'district',
        name: 'District',
        component: District
    },
    {
        path:'adddistrict',
        name:'AddDistrict',
        component: AddDistrict
    },
    {
        path: 'edit_district/:id',
        name: 'EditDistrict',
        component: () => import('../../views/admin/DistrictLocation/EditDistrict.vue')
    }
]