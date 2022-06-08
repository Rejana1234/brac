import Division from '../../views/admin/DivisionLocation/Division';
import AddDivision from '../../views/admin/DivisionLocation/AddDivision';
export default[
    {
        path:'division',
        name: 'Division',
        component: Division
    },
    {
        path:'adddivision',
        name:'AddDivision',
        component: AddDivision
    }
]