import * as React from "react";
import {useEffect, useState} from "react";
import {Button, Col, Container, Modal, Row, Table} from "react-bootstrap";
import {Player, RestPlayerslist} from "../api/playerslist";
import {RestStatus} from "../api/api-utils";
import {fetchRestPlayerslist, updatePlayer} from "../api/api";

interface Props {
    groupId: string;
    restPlayersList: RestPlayerslist
}

enum RefreshListState {
  NOT_INITIALIZED,
  STEP_OVER,
  REFRESH
}

const initPlayerslist: Player[] = [];
// TODO: make team board a SVG component that will scale instead of image
const Playerslist: React.FunctionComponent<Props> = ({restPlayersList, groupId}) => {

    const [refreshListState, setRefreshListState] = useState(RefreshListState.NOT_INITIALIZED);
    const [playerslist, setPlayerslist] = useState(initPlayerslist);
    const [updatedPlayerslist, setUpdatedPlayerslist] = useState(initPlayerslist);


    useEffect(() => {
        console.log("Calling useeffect", restPlayersList.status);
            if (restPlayersList.status === RestStatus.Success && refreshListState === RefreshListState.NOT_INITIALIZED) {
                setPlayerslist(restPlayersList.data);
            } else if (refreshListState === RefreshListState.REFRESH){
                setPlayerslist(updatedPlayerslist);
                setRefreshListState(RefreshListState.STEP_OVER);
            }
        },
        [restPlayersList, refreshListState]);

    const [showUpdatePlayerModal, setShowUpdatePlayerModal] = useState(false);
    const handleCloseUpdatePlayerModal = () => setShowUpdatePlayerModal(false);

    const [selectedPlayer, setSelectedPlayer] = useState({id: '', name: '', started: '', position: ''});
    const [nameOfSelectedPlayer, setNameOfSelectedPlayer] = useState('');

    function updatePlayerslistOnServerAndRefreshList(playerslist: Player[], selectedPlayer: Player): Player[] {
        console.log("Updating players list on the server");
        updatePlayer('G2008', selectedPlayer);
        const updatedlist = playerslist.map( player => {
            return player.id === selectedPlayer.id ? selectedPlayer : player;
        });
        console.log(playerslist);
        console.log(updatedlist);

        return updatedlist;
    }

    return (
        <Container>
            <h1 className="m-2">Players list</h1>
            <p className="m-2">Manage all players in your group</p>

            <Modal show={showUpdatePlayerModal} onHide={handleCloseUpdatePlayerModal} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Update player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="name">Name: </label>

                    <input
                        onChange={
                            (event) => setSelectedPlayer(
                                {...selectedPlayer, name: event.target.value}
                                )
                        }
                        onClick={() => {}}
                        value={selectedPlayer.name}
                        maxLength={20}
                        type="text"
                        placeholder={ ' ' }
                        step={''}
                    />
                    <p>Started: {selectedPlayer.started}</p>
                    <p>Position: {selectedPlayer.position}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => {
                        setShowUpdatePlayerModal(false);
                    }}>
                        Discard
                    </Button>
                    <Button variant="primary" onClick={ () => {
                        setUpdatedPlayerslist(updatePlayerslistOnServerAndRefreshList(playerslist, selectedPlayer));
                        setRefreshListState(RefreshListState.REFRESH);
                        setShowUpdatePlayerModal(false);
                    }}>
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
                                <tr key={player.id}
                                    onClick={() => {
                                    setShowUpdatePlayerModal(true);
                                    setSelectedPlayer(player);
                                    setNameOfSelectedPlayer(player.name);
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
