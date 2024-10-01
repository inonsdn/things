// Standart Import
import { Link } from 'react-router-dom'
// Local Import
import '../styles/ThingsItem.css'
import '../styles/lightBase.css'

// Functions

// Main
export default function ThingsItem ({name, description}) {

    const onClick = () => {
        console.log('things clicked')
    }

    return (
        <Link to={`/info/:${name}`} className='item bg-item' onClick={onClick}>
            <div className='item-image bg'>
            </div>
            <h2>{name}</h2>
            {/* <p>{description}</p> */}
        </Link>
    )
}