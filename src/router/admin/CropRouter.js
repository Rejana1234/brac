import Crop from '../../views/admin/Crop/Crop/Crop';
import AddCrop from '../../views/admin/Crop/Crop/AddCrop';
import EditCrop from '../../views/admin/Crop/Crop/EditCrop';
export default[
    {
        path:'crop',
        name: 'Crop',
        component: Crop
    },
    {
        path:'addcrop',
        name:'AddCrop',
        component: AddCrop
    },
    {
        path: 'edit_crop',
        name: 'EditCrop',
        component: EditCrop
    }    
]