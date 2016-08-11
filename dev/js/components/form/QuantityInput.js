import React from 'react';
import ReactDOM from 'react-dom';
import { ControlLabel, FormControl } from 'react-bootstrap'

class QuantityInput extends React.Component {
    constructor(props){
        super(props);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    changeQuantity() {
        let quantity = ReactDOM.findDOMNode(this.refs.quantity).value.replace(/^0+/, '');;
        this.props.handleChange(quantity);
    }
    
    render(){
        return (
            <div>
                <ControlLabel>Quantity</ControlLabel>
                <FormControl
                    ref="quantity"
                    type="text"
                    placeholder="0"
                    value={this.props.quantity}
                    onChange={this.changeQuantity}
                />
            </div>
        )
    }
}

export default QuantityInput;