import React from 'react';
import { ListGroup, ListGroupItem, Button, Glyphicon } from 'react-bootstrap'

class AddedItemList extends React.Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(index){
        console.log(index);
        this.props.removeItem(index);
    }
    render(){
        let items = this.props.addedItemList.map((item, index) => {
            var boundClick = this.remove.bind(this, index);
            return (
                <ListGroupItem key={index} ref={index} value={index}>
                    {item.name} X {item.quantity}
                    <Glyphicon 
                        className="right-glyph" 
                        glyph="remove" 
                        onClick={boundClick} 
                    />
                </ListGroupItem>
            )
        });
        return (
            <div>
                <ListGroup>
                    {items}
                </ListGroup>
                <Button block bsStyle="success">Done</Button>
            </div>
        )
    }
}

export default AddedItemList;