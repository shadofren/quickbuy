import React from 'react';
import NavBar from '../components/NavBar';


var App = React.createClass({
    render(){
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            Hello
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default App;