// Standart Import

// Local Import
import ThingsItemFlex from '../components/ThingsItemFlex'
import ThingsControlPanel from '../components/ThingsControlPanel'

import '../styles/ThingsView.css'
import '../styles/lightBase.css'
import { useState } from 'react'


// Functions

// Main
export default function ThingsView () {

    // define filter object in view to filter things items in list
    const [filterObj, setFilterObj] = useState({})

    // define function for filter changed in control panel object
    // to update filter object state
    const onSetFilterObj = (event) => {
        // update filter value
        setFilterObj({name:event.target.value})
    }

    return (
        <div className='things-view bg'>
            <ThingsControlPanel onFilter_cb={onSetFilterObj}/>
            <ThingsItemFlex filterObj={filterObj}/>
        </div>
    )
}
