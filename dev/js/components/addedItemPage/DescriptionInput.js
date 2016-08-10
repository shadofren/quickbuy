import React from 'react';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class DescriptionInput extends React.Component {
    render(){
        return (
            <div>
                <ControlLabel>Item Description</ControlLabel>
                <FormControl
                    type="textarea"
                    placeholder="Something about this item ..."
                />
            </div>
        )
    }
}

export default DescriptionInput;