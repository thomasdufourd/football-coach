import * as React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

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
                    <Nav.Link href="/footballcoach/teams">Teams</Nav.Link>
                    <Nav.Link href="/footballcoach/lineups">Lineups</Nav.Link>
                    <NavDropdown title="G2008" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#players">Players list</NavDropdown.Item>
                        <NavDropdown.Item href="#trainingsessions">Training sessions</NavDropdown.Item>
                        <NavDropdown.Item href="#season">Season</NavDropdown.Item>
                        <NavDropdown.Item href="#cups">Cups</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#admin">Admin G2008</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link eventKey={2} href="#contact">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
        ;


};

export default Banner;