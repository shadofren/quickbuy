import React from 'react';
import ReactDOM from 'react-dom';
import { ControlLabel, FormControl, InputGroup } from 'react-bootstrap'

class PriceInput extends React.Component {
    constructor(props){
        super(props);
        this.changePrice = this.changePrice.bind(this);
    }
    changePrice(){
        let price = ReactDOM.findDOMNode(this.refs.price).value.replace(/^0+/, '');
        this.props.handleChange(price);
    }
    render(){
        return (
            <div>
                <ControlLabel>Price</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl
                        ref="price"
                        type="text"
                        placeholder="0.0"
                        value={this.props.price}
                        onChange={this.changePrice}
                    />
                </InputGroup>

            </div>
        )
    }
}

export default PriceInput;