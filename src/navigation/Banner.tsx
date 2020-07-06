import * as React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BASE_PATH} from '../constants';

interface Props {
    title: string;
    isAdmin: boolean;
}

const Banner: React.FunctionComponent<Props> = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href={`${BASE_PATH}/`}>{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={`${BASE_PATH}/training`}>Training</Nav.Link>
                    <Nav.Link href={`${BASE_PATH}/regularseason`}>Regular season</Nav.Link>
                    <Nav.Link href={`${BASE_PATH}/othercompetitions`}>Other competitions</Nav.Link>
                    <NavDropdown title="G2008" id="collasible-nav-dropdown">
                        <NavDropdown.Item href={`${BASE_PATH}/players`}>Players</NavDropdown.Item>
                        <NavDropdown.Item href={`${BASE_PATH}/staff`}>Staff</NavDropdown.Item>
                        <NavDropdown.Item href={`${BASE_PATH}/calendar`}>Calendar</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href={`${BASE_PATH}/groups`} disabled={!props.isAdmin}>Other groups</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Link href={`${BASE_PATH}/teams`}>Teams</Nav.Link>
                <Nav.Link href={`${BASE_PATH}/lineups`}>Lineups</Nav.Link>
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