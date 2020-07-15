import * as React from 'react';
import {useState} from 'react';
import {Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BsXCircleFill} from 'react-icons/bs';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import {teamG2008Lag1, teamG2008Lag2, teamG2008Lag3} from "../mocking/TeamsMockdata";
import {__9er, TacticalSchemaType} from "../domain/PlayerUtils";

interface Props {
    group: string;
}

const emptyCandidateTeam: CandidateTeam = {
    name: 'New Team', schema: __9er, candidatePlayers: []
};

const newCandidateTeamWithOnePlayer: CandidateTeam = {
    name: 'New Team', schema: __9er, candidatePlayers: [
        {playerName: 'New player', id:`playercandidate-newplayer-${new Date().getTime()}`}
    ]
};

export interface CandidateTeam {
    name: string,
    schema: TacticalSchemaType,
    candidatePlayers: CandidatePlayer[]
}

export interface CandidatePlayer {
    id: string;
    playerName: string;
}


const reorder = (list: CandidatePlayer[], startIndex: number, endIndex: number):CandidatePlayer[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    console.dir(result);
    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source: CandidatePlayer[], destination: CandidatePlayer[], droppableSource: any, droppableDestination: any) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    // @ts-ignore
    result[droppableSource.droppableId] = sourceClone;
    // @ts-ignore
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 4;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 200
});


const TeamsBoard: React.FunctionComponent<Props> = (props) => {
    const [teams, setTeams] = useState([teamG2008Lag1, teamG2008Lag2, teamG2008Lag3]);
    const [showInvitePlayerModal, setShowInvitePlayerModal] = useState(false);

    const handleCloseInvitePlayerModal = () => setShowInvitePlayerModal(false);

    function onDragEnd(result: DropResult):void {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            console.log("[DEBUG] drag on same list");
            const items = reorder(teams[sInd].candidatePlayers, source.index, destination.index);
            const newState = [...teams];
            // @ts-ignore
            newState[sInd].candidatePlayers = items;
            setTeams(newState);
        } else {
            const result = move(teams[sInd].candidatePlayers, teams[dInd].candidatePlayers, source, destination);
            const newState = [...teams];
            // @ts-ignore
            newState[sInd].candidatePlayers = result[sInd];
            // @ts-ignore
            newState[dInd].candidatePlayers = result[dInd];

            setTeams(newState.filter(group => group.candidatePlayers.length));
        }
    }


    // @ts-ignore
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Season 2020</h1>
                </Col>
                <Col>
                    <h2>{props.group}</h2>
                </Col>
                <Col>
                    <Button className="m-1"
                        type="button"
                        onClick={() => {
                            setTeams([...teams, emptyCandidateTeam]);
                        }}
                    >
                        Create new team
                    </Button>
                    <Button className="m-1"
                            type="button"
                            onClick={() => {
                                setTeams([...teams, newCandidateTeamWithOnePlayer]);
                            }}
                    >
                        Add player
                    </Button>
                    <Button className="m-1"
                            type="button"
                            onClick={() => {
                                setShowInvitePlayerModal(true);
                            }}
                    >
                        Invite player
                    </Button>
                    <Modal show={showInvitePlayerModal} onHide={handleCloseInvitePlayerModal} centered={true}>
                        <Modal.Header closeButton>
                            <Modal.Title>Invite player</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Provide the name and group of the player you invite</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" >
                                Close
                            </Button>
                            <Button variant="primary">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Col>
            </Row>

            <Row>
                <div>
                </div>
            </Row>
            <Row>
                <div>
                    <div style={{display: "flex"}}>
                        <DragDropContext onDragEnd={onDragEnd}>
                            {teams.map((team, ind) => (
                                <Col key={ind}>
                                    <h4> {team.name} {team.schema.name} </h4>
                                    <Droppable key={ind} droppableId={`${ind}`}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                            {...provided.droppableProps}
                                        >
                                            {team.candidatePlayers.map((candidatePlayer, index) => (
                                                <Draggable
                                                    key={candidatePlayer.id}
                                                    draggableId={candidatePlayer.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <div
                                                                style={{
                                                                    height: 30,
                                                                    display: "flex",
                                                                    justifyContent: "space-around",
                                                                    alignContent: "baseline"
                                                                }}
                                                            >
                                                                {candidatePlayer.playerName}
                                                                <div>
                                                                    <BsXCircleFill onClick={() => {
                                                                        console.log(`playerId=${candidatePlayer.id}, 
                                                                        playerName=${candidatePlayer.playerName}`);
                                                                        const newState: CandidateTeam[] = [...teams];
                                                                        newState[ind].candidatePlayers.splice(index, 1);
                                                                        setTeams(
                                                                            newState.filter(group => group.candidatePlayers.length)
                                                                        );
                                                                    }}
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                                    </Col>
                            ))}
                        </DragDropContext>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default TeamsBoard;
