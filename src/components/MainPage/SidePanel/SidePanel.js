import React from 'react'
import OfficePanel from './OfficePanel'
import AboutPanel from './About/AboutPanel'
import ProjectsPanel from './ProjectsPanel'
import Logo from './Logo'
function SidePanel() {
    return (
        <div            
            style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-end',
            padding:'2rem',
            borderRight:'1px solid black',
            minHeight:'100vh',
            minWidth:'300px'
        }}
        >
            <Logo/>
            <AboutPanel/>
            <ProjectsPanel/>
            <OfficePanel/>
        </div>
    )
}

export default SidePanel
