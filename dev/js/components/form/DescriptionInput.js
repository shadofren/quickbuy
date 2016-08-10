import React from 'react';
import ReactDOM from 'react-dom';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class DescriptionInput extends React.Component {
    constructor(props){
        super(props);
        this.changeDescription = this.changeDescription.bind(this);
    }

    changeDescription() {
        let description = ReactDOM.findDOMNode(this.refs.description).value;
        this.props.handleChange(description);
    }

    render(){
        return (
            <div>
                <ControlLabel>Item Description</ControlLabel>
                <FormControl
                    ref="description"
                    type="textarea"
                    placeholder="Something about this item ..."
                    value={this.props.description}
                    onChange={this.changeDescription}
                />
            </div>
        )
    }
}

export default DescriptionInput;