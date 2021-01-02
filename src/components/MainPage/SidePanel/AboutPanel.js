import React from 'react'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import logo  from '../../../commons/logo.png'
import PhilosophyPanel from './AboutPanel/PhilosophyPanel'
import PeoplePanel from './AboutPanel/PeoplePanel'
import NewsPanel from './AboutPanel/NewsPanel'
function AboutPanel() {
    return (
        <div>
            <Link to ="/">
                <Image style={{paddingBottom:'2rem'}} src={logo} fluid/>
            </Link>
            <h5 style={{borderBottom:'1px solid black'}}>VIRON</h5>
            <div style={{paddingLeft:'1rem'}}>
                <PhilosophyPanel/>
                <PeoplePanel/>
                <NewsPanel/>
            </div>
        </div>
    )
}

export default AboutPanel
