import React from 'react';
import ReactDOM from 'react-dom';
import { Image, Popover, Overlay, Button, Modal, FormGroup, FormControl } from 'react-bootstrap';


class ImageInput extends React.Component {
    constructor(props){
        super(props);
        // mainImage will be passed by index 0
        // subImages will have index according to their positions
        this.state = {
            show: false,
            url: this.props.src,
            index: this.props.index
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeURL = this.changeURL.bind(this);
        this.saveURL = this.saveURL.bind(this);
    }

    handleClick(){
        this.setState({show: !this.state.show});
    }

    changeURL(){
        let newURL = ReactDOM.findDOMNode(this.refs.imageSrc).value;
        console.log(newURL);
        this.setState({url: newURL});
    }

    saveURL(){
        this.setState({show: !this.state.show});
        this.props.handleChange(this.state.url, this.state.index);
    }

    render(){
        return (
            <div>
                <Image src={this.props.src} onClick={this.handleClick} responsive thumbnail />
                <Modal show={this.state.show} onHide={this.handleClick}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Image Url</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <FormControl
                                ref="imageSrc"
                                type="text"
                                value={this.state.url}
                                onChange={this.changeURL}
                            />
                        </FormGroup> 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClick}>Close</Button>
                        <Button onClick={this.saveURL}>Save</Button>
                    </Modal.Footer>
                    </Modal>
            </div>
        )
    }
}

export default ImageInput;