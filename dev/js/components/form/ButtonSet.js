import React from 'react';
import { ButtonGroup, Button, Row, Col, Glyphicon } from 'react-bootstrap'

class ButtonSet extends React.Component {
    render(){
        return (
            <Row className="show-grid">
                <Col xs= {12} sm={12} md={2}>
                    <Button block bsStyle="danger" onClick={this.props.cancel}>
                        Cancel
                    </Button>
                </Col>
                <Col xs= {12} sm={12} md={4} mdPush={2}>
                    <Button block bsStyle="warning" onClick={this.props.clear}>
                        Clear <Glyphicon glyph="refresh" />
                    </Button>
                </Col>                
                <Col xs= {12} sm={12} md={2} mdPush={4}>
                    <Button block bsStyle="success" onClick={this.props.add}>
                        <Glyphicon glyph="plus" />
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default ButtonSet;