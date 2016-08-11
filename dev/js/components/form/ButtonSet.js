import React from 'react';
import { ButtonGroup, Button, Row, Col, Glyphicon } from 'react-bootstrap'

class ButtonSet extends React.Component {
    render(){
        return (
            <Row className="show-grid">
                <Col xs= {12} sm={12} md={3}>
                    <Button block onClick={this.props.cancel}>
                        Cancel
                    </Button>
                </Col>
                <Col xs= {12} sm={12} md={4} mdPush={1}>
                    <Button block onClick={this.props.clear}>
                        Clear
                    </Button>
                </Col>                
                <Col xs= {12} sm={12} md={2} mdPush={3}>
                    <Button block onClick={this.props.add}>
                        <Glyphicon glyph="plus" />
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default ButtonSet;