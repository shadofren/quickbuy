import React from 'react';
import { FormGroup, Col, Row, Grid } from 'react-bootstrap'
import ButtonSet from './ButtonSet'
import ImageInput from './ImageInput'
import ImageInputList from './ImageInputList'
import NumberInput from './NumberInput'
import DateTimeInput from './DateTimeInput'
import TextInput from './TextInput'


const initialState = {
    mainImageSrc: '/assets/thumbnail.png',
    subImages: [
        '/assets/thumbnail.png', '/assets/thumbnail.png', '/assets/thumbnail.png',
        '/assets/thumbnail.png', '/assets/thumbnail.png', '/assets/thumbnail.png'
    ],
    name: "",
    price: "0",
    dateTime: (new Date()),
    location: "",
    quantity: "0",
    description: ""
};

class Form extends React.Component {
    constructor(){
        super();
        this.state = initialState;
        this.changeMainImage = this.changeMainImage.bind(this); 
        this.changeSubImages = this.changeSubImages.bind(this); 
        this.changePrice = this.changePrice.bind(this); 
        this.changeDateTime = this.changeDateTime.bind(this); 
        this.changeName = this.changeName.bind(this); 
        this.changeLocation = this.changeLocation.bind(this); 
        this.changeQuantity = this.changeQuantity.bind(this); 
        this.changeDescription = this.changeDescription.bind(this); 
        this.handleAdd = this.handleAdd.bind(this); 
        this.handleClear = this.handleClear.bind(this); 
        this.handleCancel = this.handleCancel.bind(this); 
    }

    changeMainImage(src){
        this.setState({mainImageSrc: src});
    }

    changeSubImages(src, index){
        let newSrcs = [...this.state.subImages];
        newSrcs[index] = src;
        this.setState({subImages: newSrcs})
    }

    changePrice(price){
        this.setState({price: price});
    }

    changeDateTime(dateTime){
        this.setState({dateTime: dateTime});
    }

    changeLocation(location){
        this.setState({location: location});
    }

    changeName(name){
        this.setState({name: name});
    }

    changeQuantity(quantity){
        this.setState({quantity: quantity});
    }

    changeDescription(description){
        this.setState({description: description});
    }

    handleAdd(){
        this.props.addItem(this.state);
        this.setState(initialState);
    }

    handleClear(){
        this.setState(initialState);
    }

    handleCancel(){
        this.setState(initialState);
    }

    render(){
        return (
            <div>
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={6}>
                        <ImageInput 
                            index={0}
                            src={this.state.mainImageSrc}
                            handleChange={this.changeMainImage}
                        />
                    </Col>
                    <Col xs= {12} sm={12} md={6}>
                        <ImageInputList 
                            imagesSrc={this.state.subImages}
                            handleChange={this.changeSubImages}
                        />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={12}>
                        <TextInput 
                            field={this.state.name}
                            handleChange={this.changeName}
                            label="Name"
                            placeholder="Enter a name for your item ..."
                        />
                    </Col>
                </Row>
            </FormGroup>    
            <FormGroup>              
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={6}>
                        <NumberInput 
                            inputType="price"
                            value={this.state.price}
                            handleChange={this.changePrice}
                            label="Price"
                            placeholder="0.0"
                        />
                    </Col>
                    <Col xs= {12} sm={12} md={6}>
                        <DateTimeInput 
                            dateTime={this.state.dateTime} 
                            handleChange={this.changeDateTime}
                        />
                    </Col>
                </Row>            
            </FormGroup>    
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={6}>
                        <TextInput 
                            field={this.state.location}
                            handleChange={this.changeLocation}
                            label="Pickup location"
                            placeholder="Enter a pickup location ..."
                        />
                    </Col>
                    <Col xs= {12} sm={12} md={6}>
                        <NumberInput 
                            inputType="quantity"
                            value={this.state.quantity}
                            handleChange={this.changeQuantity}
                            label="Quantity"
                            placeholder="0"
                        />
                    </Col>
                </Row>            
            </FormGroup>    
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={12}>
                        <TextInput 
                            field={this.state.description}
                            handleChange={this.changeDescription}
                            label="Item Description"
                            placeholder="Something about this item ..."
                        />
                    </Col>
                </Row>  
            </FormGroup>    
            <Row className="show-grid">
                <Col xs= {12} sm={12} md={12}>
                    <ButtonSet 
                        add={this.handleAdd}
                        clear={this.handleClear}
                        cancel={this.handleCancel}
                    />
                </Col>
            </Row>                    
            </div>

        )
    }
}

export default Form;