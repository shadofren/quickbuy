import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class AddedItemList extends React.Component {
    render(){
        let items = this.props.addedItemList.map((item, index) => {
            return (
                <ListGroupItem key={index}>
                    {item}
                    <Glyphicon 
                        className="right-glyph" 
                        glyph="remove" 
                        onClick={()=>{}} 
                    />
                </ListGroupItem>
            )
        });
        return (
            <div>
                <ListGroup>
                    {items}
                </ListGroup>
                <Button block>Done</Button>
            </div>
        )
    }
}

export default AddedItemList;