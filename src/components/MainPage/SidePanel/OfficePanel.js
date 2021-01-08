import React from 'react'
import ContactPanel from './OfficePanel/ContactPanel'
import LicensePanel from './OfficePanel/LicensePanel'

function OfficePanel() {
    return (
        <div>
            <h5 style={{borderBottom:'1px solid black'}}>OFFICE</h5>
            <div style={{paddingLeft:'1rem', fontSize:'19px'}}>
                <ContactPanel/>
                <LicensePanel/>
            </div>
        </div>
    )
}

export default OfficePanel
