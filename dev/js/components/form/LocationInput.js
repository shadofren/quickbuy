import React from 'react';
import ReactDOM from 'react-dom';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl'

class LocationInput extends React.Component {
    constructor(props){
        super(props);
        this.changeLocation = this.changeLocation.bind(this);
    }

    changeLocation() {
        let location = ReactDOM.findDOMNode(this.refs.location).value;
        this.props.handleChange(location);
    }

    render(){
        return (
            <div>
                <ControlLabel>Pickup Location</ControlLabel>
                <FormControl
                    ref="location"
                    type="text"
                    placeholder="Enter a pickup location ..."
                    value={this.props.location}
                    onChange={this.changeLocation}
                />
            </div>
        )
    }
}

export default LocationInput;