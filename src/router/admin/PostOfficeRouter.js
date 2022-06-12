import PostOffice from '../../views/admin/PostOfficeLocation/PostOffice';
import AddPostOffice from '../../views/admin/PostOfficeLocation/AddPostOffice';
export default[
    {
        path:'post_office',
        name: 'PostOffice',
        component: PostOffice
    },
    {
        path:'add_post_office',
        name:'AddPostOffice',
        component: AddPostOffice
    }
]