import React from 'react';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'

class PriceInput extends React.Component {
    render(){
        return (
            <div>
                <ControlLabel>Price</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl
                        type="text"
                        placeholder="0.0"
                    />
                </InputGroup>

            </div>
        )
    }
}

export default PriceInput;