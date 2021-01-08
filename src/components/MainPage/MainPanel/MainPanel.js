import React,{useEffect,useState} from 'react'
import { useSelector, } from 'react-redux'
import firebase from '../../../firebase'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function MainPanel() {
    const {currentMenu} = useSelector(state => state.page,[])
    const {currentMenuImages} = useSelector(state => state.page,[])
    const [images, setImages] = useState([])
    const renderImages = (images) =>
        images.length > 0 &&
        images.map((image,idx) =>(
            <Col xs={8} md={{span:3, offset:0}}>
                <Image
                    style={{paddingBottom:'1rem'}}
                    key={idx}
                    src={image}
                    fluid
                />
            </Col>
        ))
    return (
        <div>
            <div style={{
                width:'100%',
                height:'100vh',
                border:'.2rem solid #ececec',
                borderRadius:'4px',
                padding:'1rem',
                overflowY: 'auto'
            }}>
            <Container fluid style={{padding:0, margin:0}}>
                <Row>
                    {renderImages(currentMenuImages)}
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default MainPanel
