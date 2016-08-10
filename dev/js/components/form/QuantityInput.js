import React from 'react';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class QuantityInput extends React.Component {
    render(){
        return (
            <div>
                <ControlLabel>Quantity</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="0"
                />
            </div>
        )
    }
}

export default QuantityInput;