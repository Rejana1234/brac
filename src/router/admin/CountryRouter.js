import Country from '../../views/admin/CountryLocation/Country';
import AddCountry from '../../views/admin/CountryLocation/AddCountry';
export default[
    {
        path:'country',
        name: 'Country',
        component: Country
    },
    {
        path:'addcountry',
        name:'AddCountry',
        component: AddCountry
    }
]