import React from 'react'
import SidePanel from './SidePanel/SidePanel'
import MainPanel from './MainPanel/MainPanel'
function MainPage() {
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'500px'}}>
                <SidePanel/>
            </div>
            <div style={{width:'100%'}}>
                <MainPanel/>
            </div>
        </div>
    )
}

export default MainPage
