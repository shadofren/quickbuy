import React from 'react';
import ImageInput from './ImageInput'
import { Row, Col } from 'react-bootstrap'

class ImageInputList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imagesSrc: this.props.imagesSrc
        }
        this.changeSubImage = this.changeSubImage.bind(this);
    }

    changeSubImage(src, index){
        this.props.handleChange(src, index);
    }

    render(){
        let subImages = this.props.imagesSrc.map((image, index)=>{
            return(
                <Col xs={4} sm={4} md={4}>
                    <ImageInput src={image} index={index} handleChange={this.changeSubImage}/>
                </Col>
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