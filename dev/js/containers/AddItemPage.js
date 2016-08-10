import React from 'react';
import {connect} from 'react-redux'
import Form from '../components/addedItemPage/Form';
import AddedItemList from '../components/addedItemPage/AddedItemList';
import Col from 'react-bootstrap/lib/Col'


class AddItemPage extends React.Component {
    render() {
        return (
            <div>
                <Col xs= {12} sm={12} md={8}>
                    <Form />
                </Col>
                <Col xs= {12} sm={12} md={4}>
                    <AddedItemList addedItemList={this.props.addedItemList}/>
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        addedItemList: state.addedItemList,
    };
}

export default connect(mapStateToProps)(AddItemPage);