import React from 'react';
import ReactDOM from 'react-dom';
import { ControlLabel, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class NumberInput extends React.Component {
    constructor(props){
        super(props);
        this.changeNumber = this.changeNumber.bind(this);
    }
    changeNumber(){
        let value = ReactDOM.findDOMNode(this.refs.field).value.replace(/^0+/, '');
        this.props.handleChange(value);
    }
    render(){
        if (this.props.inputType == "price"){
            return (
                <div>
                    <ControlLabel>{this.props.label}</ControlLabel>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="usd" /></InputGroup.Addon>
                        <FormControl
                            ref="field"
                            type="text"
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            onChange={this.changeNumber}
                        />
                    </InputGroup>
                </div>
            )
        }
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    ref="field"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.changeNumber}
                />
            </div>
        )
    }
}

export default NumberInput;