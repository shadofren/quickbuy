import React from 'react';
import ReactDOM from 'react-dom';
import DateTimeField from 'react-bootstrap-datetimepicker';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class DateTimeInput extends React.Component {
    constructor(props){
        super(props);
        this.changeDateTime = this.changeDateTime.bind(this);
    }
    changeDateTime() {
        let dateTime = ReactDOM.findDOMNode(this.refs.dateTimeInput).lastChild.firstChild.value;
        this.props.handleChange(dateTime);
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