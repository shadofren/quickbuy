import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class NavBar extends React.Component {
    render(){
        return (
            <Navbar inverse>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">QuickBuy</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Cat 1</MenuItem>
                    <MenuItem eventKey={3.2}>Cat 2</MenuItem>
                    <MenuItem eventKey={3.3}>Cat 3</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Others</MenuItem>
                    </NavDropdown>
                </Nav>
                <Navbar.Form pullLeft>
                    <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button bsStyle="info" type="submit">Submit</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Login</NavItem>
                    <NavItem eventKey={2} href="#">Sign up</NavItem>
                    <NavItem eventKey={3} href="#">Sell</NavItem>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default NavBar;