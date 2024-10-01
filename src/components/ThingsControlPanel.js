// Standart Import

// Local Import
import '../styles/ThingsView.css'
import '../styles/lightBase.css'
import { CgAddR, CgSearch } from "react-icons/cg";

// Functions

// Main
export default function ThingsControlPanel ({onFilter_cb}) {
    return (
        <div className='control-panel'>
            <input type='text' className='bg' placeholder='Find your things' onChange={onFilter_cb}/>
            <CgSearch size={'2em'} className='search-icon' />
            <CgAddR size={'2em'} className='add-icon'/>
        </div>
    )
}