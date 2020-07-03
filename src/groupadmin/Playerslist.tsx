import * as React from "react";
import {Col, Container, Row, Table, Image} from "react-bootstrap";
import lineup9er from "./lineup-9er.png";

interface Props {
    group: string;
}

const players = [
    {
        name: "Tobias",
        position: "GK",
        started: 2013
    },
    {
        name: "Theo",
        position: "MF",
        started: 2013
    },
    {
        name: "Storm",
        position: "CB",
        started: 2014
    },
];
// TODO: make team board a SVG component that will scale instead of image
const Playerslist: React.FunctionComponent<Props> = (props) => {

    return (
        <Container>
            <h1 className="m-2">Players list</h1>
            <p className="m-2">Manage all players in your group</p>

            <Row>
                <Col lg="8">
                    <Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Started</th>
                            <th>Plays</th>
                        </tr>
                        </thead>
                        <tbody>
                        {players.map( player => {
                            return (
                                    <tr>
                                        <td>{player.name}</td>
                                        <td>{player.started}</td>
                                        <td>{player.position}</td>
                                    </tr>
                                )
                        })}
                       </tbody>
                    </Table>
                </Col>
                <Col sm="1" lg="2">
                    <Image src={lineup9er} />
                </Col>

            </Row>
        </Container>
    )
};

export default Playerslist;
