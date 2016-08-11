import React from 'react';
import { Grid, Row } from 'react-bootstrap'
import NavBar from '../components/app/NavBar';
import AddItemPage from './AddItemPage';

var App = React.createClass({
    render(){
        return (
            <div>
                <NavBar />
                <Grid>
                    <Row className="show-grid">
                        <AddItemPage />
                    </Row>
                </Grid>
            </div>
        );
    }
});

export default App;