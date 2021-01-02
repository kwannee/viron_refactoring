import React from 'react'
import OfficePanel from './OfficePanel'
import AboutPanel from './AboutPanel'
import ProjectsPanel from './ProjectsPanel'
function SidePanel() {
    return (
        <div            
            style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-end',
            backgroundColor:"#7B83EB",
            padding:'2rem',
            minHeight:'100vh',
            minWidth:'275px'
        }}
        >
            <AboutPanel/>
            <ProjectsPanel/>
            <OfficePanel/>
        </div>
    )
}

export default SidePanel
