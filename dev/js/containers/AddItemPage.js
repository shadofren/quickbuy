import React from 'react';
import {connect} from 'react-redux'
import Form from '../components/form/AddItemForm';
import AddedItemList from '../components/form/AddedItemList';
import Col from 'react-bootstrap/lib/Col'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index';

class AddItemPage extends React.Component {
    render() {
        return (
            <div>
                <Col xs= {12} sm={12} md={8}>
                    <Form addItem={this.props.addItem}/>
                </Col>
                <Col xs= {12} sm={12} md={4}>
                    <AddedItemList 
                        addedItemList={this.props.addedItemList}
                        removeItem={this.props.removeItem}
                    />
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        addedItemList: state.addedItems,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: bindActionCreators(actions.addItem, dispatch),
        removeItem: bindActionCreators(actions.removeItem, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);