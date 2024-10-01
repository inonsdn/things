// Standart Import
import { useState } from 'react'
// Local Import
import ThingsItem from './ThingsItem'

import '../styles/ThingsItem.css'
import '../styles/lightBase.css'

// Functions
function getThingItemInfoObjs (thingsItems, filterObj) {
    if (!filterObj) {
        return thingsItems
    }
    return thingsItems.filter(thingsItem => {

        // match all filter if filter object is not set
        if (!filterObj.name) {
            return true
        }
        // check string in filter is be substring in chat room name
        if ( thingsItem.name.toLowerCase().includes(filterObj.name.toLowerCase()) ) {
            return true
        }

        return false
    })
}

const mockDataList = [
    {
        name: 'My things 1',
        description: 'this my item no.1'
    },
    {
        name: 'My things 2',
        description: 'this my item no.2'
    },
    {
        name: 'My things 3',
        description: 'this my item no.3'
    },
    {
        name: 'My things 4',
        description: 'this my item no.4'
    }
]

// Main
export default function ThingsItemFlex ({filterObj}) {

    const [thingsItems, getThingsItems] = useState(mockDataList)

    const thingItemInfoList = getThingItemInfoObjs(thingsItems, filterObj)

    return (
        <div className='item-flex'>
            { thingItemInfoList.map((thingItemInfo, _index) => <ThingsItem key={thingItemInfo.name} name={thingItemInfo.name} description={thingItemInfo.description}/>) }
        </div>
    )
}