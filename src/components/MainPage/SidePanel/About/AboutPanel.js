import React from 'react'
import Image from 'react-bootstrap/Image'
import LoadImage from '../util/LoadImage'
function AboutPanel() {
    return (
        <div style={{paddingBottom:'1rem'}}>
            <h5 style={{borderBottom:'1px solid black'}}>VIRON</h5>
            <div style={{paddingLeft:'1rem', fontSize:'19px'}}>
                <LoadImage name={"Philosophy"}/>
                <LoadImage name={"People"}/>
                <LoadImage name={"News"}/>
            </div>
        </div>
    )
}

export default AboutPanel
