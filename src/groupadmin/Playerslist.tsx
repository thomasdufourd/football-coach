import * as React from "react";
import {useEffect, useState} from "react";
import {Col, Container, Image, Row, Table} from "react-bootstrap";
import lineup9er from "./lineup-9er.png";
import {Player, RestPlayerslist} from "../api/playerslist";
import {RestStatus} from "../api/api-utils";

interface Props {
    groupId: string;
    restPlayersList: RestPlayerslist
}


const initPlayerslist : Player[] = [];
// TODO: make team board a SVG component that will scale instead of image
const Playerslist: React.FunctionComponent<Props> = ({restPlayersList, groupId}) => {

    const [playerslist, setPlayerslist] = useState(initPlayerslist);

    useEffect(() => {
            if (restPlayersList.status === RestStatus.Success) {
                console.log("Setting playerslist");
                setPlayerslist(restPlayersList.data);
            }
        },
        [restPlayersList]);

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
                        {playerslist.map( player => {
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
                <Row>
                    <Col sm="1" lg="2">
                        <Image src={lineup9er} />
                    </Col>
                </Row>

            </Row>
        </Container>
    )
};

export default Playerslist;
