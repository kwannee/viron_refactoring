import React,{useState,useRef} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import firebase from '../../../../firebase'
import {setCurrentMenu,setCurrentImages} from '../../../../redux/actions/main_action'

function LoadImage(props) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const loadImageRef = useRef();
    const handleLoadImageCLick = () =>{
        loadImageRef.current.click()
    }
    const handleClick = async () =>{
        dispatch(setCurrentMenu({currentMenu:props.name}))
        dispatch(setCurrentImages("reset"))
        setLoading(true)
        try{
            await firebase.storage().ref(`${props.name}/`).listAll().then(async (res)=>{
                res.items.forEach(async item =>{
                    let downloadURL = await item.getDownloadURL()
                    dispatch(setCurrentImages(downloadURL))
                })
                // for(let i = 0; i <res.items.length; i++){
                //     let downloadURL = await res.items[i].getDownloadURL()
                //     dispatch(setCurrentImages(downloadURL))
                // }
            })
            setLoading(false)
        }catch(error){
            alert(error)
            setLoading(false)
        }
    }
    return (
        <div>
            <p style={{margin:'none'}} onClick={handleLoadImageCLick}>{props.name}</p>
            <button style={{display:'none'}} ref={loadImageRef} onClick={handleClick} disabled={loading}/>
        </div>
    )
}

export default LoadImage
