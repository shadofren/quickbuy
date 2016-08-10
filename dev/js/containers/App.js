import React from 'react';
import NavBar from '../components/NavBar';
import AddItemPage from './AddItemPage';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

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