import React from 'react';
import ImageInput from './ImageInput'
import ImageInputList from './ImageInputList'
import PriceInput from './PriceInput'
import DateTimeInput from './DateTimeInput'
import LocationInput from './LocationInput'
import QuantityInput from './QuantityInput'
import DescriptionInput from './DescriptionInput'
import AddMoreItemButton from './AddMoreItemButton'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Grid from 'react-bootstrap/lib/Grid'
import ButtonSet from './ButtonSet'

const initialState = {
    mainImageSrc: '/assets/thumbnail.png',
    subImages: [
        '/assets/thumbnail.png', '/assets/thumbnail.png', '/assets/thumbnail.png',
        '/assets/thumbnail.png', '/assets/thumbnail.png', '/assets/thumbnail.png'
    ],
    price: 0.0,
    dateTime: (new Date()),
    location: "",
    quantity: 0,
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
                    <Col xs= {12} sm={12} md={6}>
                        <PriceInput
                            price={this.state.price} 
                            handleChange={this.changePrice}
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
                        <LocationInput 
                            location={this.state.location}
                            handleChange={this.changeLocation}
                        />
                    </Col>
                    <Col xs= {12} sm={12} md={6}>
                        <QuantityInput 
                            quantity={this.state.quantity}
                            handleChange={this.changeQuantity}
                        />
                    </Col>
                </Row>            
            </FormGroup>    
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={12}>
                        <DescriptionInput 
                            description={this.state.description}
                            handleChange={this.changeDescription}
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