import React from 'react';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl'

class LocationInput extends React.Component {
    render(){
        return (
            <div>
                <ControlLabel>Pickup Location</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter a pickup location ..."
                />
            </div>
        )
    }
}

export default LocationInput;