import React from 'react';
import ImageInput from './ImageInput'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class ImageInputList extends React.Component {
    render(){
        return (
            <div>
                <Row className="show-grid">
                    <Col xs={4} sm={4} md={4}><ImageInput /></Col>
                    <Col xs={4} sm={4} md={4}><ImageInput /></Col>
                    <Col xs={4} sm={4} md={4}><ImageInput /></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={4} sm={4} md={4}><ImageInput /></Col>
                    <Col xs={4} sm={4} md={4}><ImageInput /></Col>
                    <Col xs={4} sm={4} md={4}><ImageInput /></Col>
                </Row>
            </div>
        )
    }
}

export default ImageInputList;