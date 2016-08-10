import React from 'react';
import ReactDOM from 'react-dom';
import DateTimeField from 'react-bootstrap-datetimepicker';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class DateTimeInput extends React.Component {
    constructor(props){
        super(props);
        this.changeDateTime = this.changeDateTime.bind(this);
    }
    changeDateTime(newDate) {
        this.props.handleChange(new Date(parseInt(newDate)));
    }
    
    render(){
        return (
            <div>
                <ControlLabel>Available from</ControlLabel>
                <DateTimeField 
                    ref="dateTimeInput"
                    dateTime={this.props.dateTime}
                    onChange={this.changeDateTime}
                />
            </div>
        )
    }
}

export default DateTimeInput;