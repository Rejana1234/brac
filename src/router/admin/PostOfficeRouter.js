import PostOffice from '../../views/admin/PostOfficeLocation/PostOffice';
import AddPostOffice from '../../views/admin/PostOfficeLocation/AddPostOffice';
export default[
    {
        path:'postOffice',
        name: 'PostOffice',
        component: PostOffice
    },
    {
        path:'addpostOffice',
        name:'AddPostOffice',
        component: AddPostOffice
    }
]