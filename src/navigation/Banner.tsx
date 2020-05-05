import * as React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BASE_PATH} from '../server/constants';

interface Props {
    title: string;
}

const Banner: React.FunctionComponent<Props> = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={`${BASE_PATH}/teams`}>Teams</Nav.Link>
                    <Nav.Link href={`${BASE_PATH}/lineups`}>Lineups</Nav.Link>
                    <NavDropdown title="G2008" id="collasible-nav-dropdown">
                        <NavDropdown.Item href={`${BASE_PATH}/G2008/players`}>Players list</NavDropdown.Item>
                        <NavDropdown.Item href={`${BASE_PATH}/G2008/trainingsessions`}>Training sessions</NavDropdown.Item>
                        <NavDropdown.Item href={`${BASE_PATH}/G2008/season`}>Season</NavDropdown.Item>
                        <NavDropdown.Item href={`${BASE_PATH}/G2008/cups`}>Cups</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={`${BASE_PATH}/G2008/admin`}>Admin G2008</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href={`${BASE_PATH}/about`}>About</Nav.Link>
                    <Nav.Link eventKey={2} href={`${BASE_PATH}/contact`}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
        ;


};

export default Banner;