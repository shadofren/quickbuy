import React from 'react';
import ImageInput from './ImageInput'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class ImageInputList extends React.Component {
    render(){
        let subImages = this.props.imagesSrc.map((image)=>{
            return(
                <Col xs={4} sm={4} md={4}><ImageInput src={image}/></Col>
            );
        });
        return (
            <div>
                <Row className="show-grid">
                    {subImages}
                </Row>
            </div>
        )
    }
}

export default ImageInputList;