import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class DateTimeInput extends React.Component {
    render(){
        return (
            <div>
                <ControlLabel>Available from</ControlLabel>
                <DateTimeField />
            </div>
        )
    }
}

export default DateTimeInput;