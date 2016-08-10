import React from 'react';
import Image from 'react-bootstrap/lib/Image'

class ImageInput extends React.Component {
    render(){
        return (
            <Image src={this.props.src} responsive />
        )
    }
}

export default ImageInput;