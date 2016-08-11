import React from 'react';
import ReactDOM from 'react-dom';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl'

class TextInput extends React.Component {
    constructor(props){
        super(props);
        this.changeField = this.changeField.bind(this);
    }

    changeField() {
        let field = ReactDOM.findDOMNode(this.refs.field).value;
        this.props.handleChange(field);
    }

    render(){
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    ref="field"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.field}
                    onChange={this.changeField}
                />
            </div>
        )
    }
}

export default TextInput;