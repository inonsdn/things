// Standart Import

// Local Import
import { Link } from 'react-router-dom'
import '../styles/TopBar.css'
import '../styles/lightBase.css'

const MenuItemList = [
    {
        name: 'Things',
        path: '/'
    },
    {
        name: 'Data',
        path: '/analytic'

    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Setting',
        path: '/setting'
    }
]

// Functions

// Main
export default function TopBar () {
    return (
        <div className='top-bar bg-item'>
            {MenuItemList.map((menuItem, _index) => (
                <Link to={menuItem.path} className='menu-item light-text' key={menuItem.name}>
                    <h2>{menuItem.name}</h2>
                </Link>
            ))}
        </div>
    )
}