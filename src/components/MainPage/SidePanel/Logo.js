import React from 'react'
import logo  from '../../../commons/logo.png'
import Image from 'react-bootstrap/Image'
function Logo() {
    return (
        <div>
            <Image style={{paddingBottom:'2rem',paddingRight:'2rem', width:'200px'}} src={logo} fluid onDragStart={(e)=>{e.preventDefault()}}/>
        </div>
    )
}

export default Logo
