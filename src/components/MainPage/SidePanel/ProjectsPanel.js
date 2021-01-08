import React,{useEffect,useState} from 'react'
import firebase from '../../../firebase'
function ProjectsPanel() {
    const [years, setYears] = useState([])
    useEffect(async () => {
        setYears([])
        let newArray = []
        await firebase.storage().ref().child('Projects/').listAll().then((res)=>{
            for(let idx = 0; idx < res.prefixes.length; idx++){
                newArray.push(res.prefixes[idx].name)
            }
        })
        setYears(newArray)
        return () => {
            
        }
    }, [])
    const renderYears = (years) =>
        years.length > 0 &&
        years.map((year,idx) =>
            <p style={{margin:0}}>{year}</p>
        )
    return (
        <div style={{paddingBottom:'1rem'}}>
            <h5 style={{borderBottom:'1px solid black'}}>PROEJCTS</h5>
            <div style={{paddingLeft:'1rem', fontSize:'19px'}}>
                {renderYears(years)}
            </div>
        </div>
    )
}

export default ProjectsPanel
