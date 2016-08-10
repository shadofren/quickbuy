import React from 'react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class ButtonSet extends React.Component {
    render(){
        return (
            <Row className="show-grid">
                <Col xs= {12} sm={12} md={3}><Button block>Cancel</Button></Col>
                <Col xs= {12} sm={12} md={4} mdPush={1}><Button block>Clear</Button></Col>
                <Col xs= {12} sm={12} md={2} mdPush={3}><Button block><Glyphicon glyph="plus" /></Button></Col>
            </Row>
        )
    }
}

export default ButtonSet;