import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class AddedItemList extends React.Component {

    render(){
        let items = ["Item 1", "Item 2", "Item 3"].map((item) => {
            return (
                <ListGroupItem>{item}<Glyphicon className="right-glyph" glyph="remove" /></ListGroupItem>
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