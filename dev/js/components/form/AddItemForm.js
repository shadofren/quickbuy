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

class Form extends React.Component {
    render(){
        return (
            <div>
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={6}><ImageInput /></Col>
                    <Col xs= {12} sm={12} md={6}><ImageInputList /></Col>
                </Row>
            </FormGroup>    
            <FormGroup>              
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={6}><PriceInput /></Col>
                    <Col xs= {12} sm={12} md={6}><DateTimeInput /></Col>
                </Row>            
            </FormGroup>    
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={6}><LocationInput /></Col>
                    <Col xs= {12} sm={12} md={6}><QuantityInput /></Col>
                </Row>            
            </FormGroup>    
            <FormGroup>
                <Row className="show-grid">
                    <Col xs= {12} sm={12} md={12}><DescriptionInput /></Col>
                </Row>  
            </FormGroup>    
            <Row className="show-grid">
                <Col xs= {12} sm={12} md={12}><ButtonSet /></Col>
            </Row>                    
            </div>

        )
    }
}

export default Form;