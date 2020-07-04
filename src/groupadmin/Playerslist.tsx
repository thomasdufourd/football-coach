import * as React from "react";
import {useEffect, useState} from "react";
import {Button, Col, Container, Modal, Row, Table} from "react-bootstrap";
import {Player, RestPlayerslist} from "../api/playerslist";
import {RestStatus} from "../api/api-utils";

interface Props {
    groupId: string;
    restPlayersList: RestPlayerslist
}


const initPlayerslist: Player[] = [];
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

    const [showUpdatePlayerModal, setShowUpdatePlayerModal] = useState(false);
    const handleCloseUpdatePlayerModal = () => setShowUpdatePlayerModal(false);
    const [selectedPlayer, setSelectedPlayer] = useState({name: '', started: '', position: ''});

    return (
        <Container>
            <h1 className="m-2">Players list</h1>
            <p className="m-2">Manage all players in your group</p>

            <Modal show={showUpdatePlayerModal} onHide={handleCloseUpdatePlayerModal} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Update player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Name: {selectedPlayer.name}</p>
                    <p>Started: {selectedPlayer.started}</p>
                    <p>Position: {selectedPlayer.position}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Discard
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

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
                        {playerslist.map(player => {
                            return (
                                <tr onClick={() => {
                                    setShowUpdatePlayerModal(true);
                                    setSelectedPlayer(player);
                                }}>
                                    <td>{player.name}</td>
                                    <td>{player.started}</td>
                                    <td>{player.position}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h4>Positions on the pitch</h4>
                    <h6>Defenders - DF</h6>
                    <ul>
                        <li>GK - Goalkeeper</li>
                        <li>RB - Right-back</li>
                        <li>SW - Sweeper</li>
                        <li>CB - Centre-back</li>
                        <li>LB - Left-back</li>
                    </ul>
                    <h6>Midfielders - MF</h6>
                    <ul>
                        <li>RM - Right-midfield</li>
                        <li>LM - Left-midfield</li>
                        <li>CM - Central Midfielders</li>
                        <li>DM - Defensive midfielder</li>
                        <li>BX - Box-to-Box CM</li>
                        <li>AM - Attacking midfielder</li>
                    </ul>
                    <h6>Forwards - FW</h6>
                    <ul>
                        <li>RW - Right-wing</li>
                        <li>ST - Striker</li>
                        <li>LW - Left-wing</li>
                    </ul>
                </Col>

            </Row>
        </Container>
    )
};

export default Playerslist;
