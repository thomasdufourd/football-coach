import * as React from 'react';
import {useState} from 'react';
import {Breadcrumb, Button, Col, Container, Row} from "react-bootstrap";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

interface Props {
    group: string;
}

export interface CandidatePlayer {
    id: string;
    playerName: string;
}


// fake data generator
const getCandidatePlayers = (count: number, offset = 0): CandidatePlayer[] => {
    return Array.from({length: count}, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        playerName: `player ${k + offset}`
    }))
};

const reorder = (list: CandidatePlayer[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
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
const grid = 8;

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
    width: 250
});


const Teams: React.FunctionComponent<Props> = (props) => {
    const [teams, setTeams] = useState([getCandidatePlayers(10), getCandidatePlayers(5, 10)]);


    function onDragEnd(result: any) {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(teams[sInd], source.index, destination.index);
            const newState = [...teams];
            // @ts-ignore
            newState[sInd] = items;
            setTeams(newState);
        } else {
            const result = move(teams[sInd], teams[dInd], source, destination);
            const newState = [...teams];
            // @ts-ignore
            newState[sInd] = result[sInd];
            // @ts-ignore
            newState[dInd] = result[dInd];

            setTeams(newState.filter(group => group.length));
        }
    }


    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="../">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Teams</Breadcrumb.Item>
            </Breadcrumb>

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
                            setTeams([...teams, []]);
                        }}
                    >
                        Add team
                    </Button>
                    <Button className="m-1"
                        type="button"
                        onClick={() => {
                            setTeams([...teams, getCandidatePlayers(1)]);
                        }}
                    >
                        Add new player
                    </Button>
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
                            {teams.map((el, ind) => (
                                <Droppable key={ind} droppableId={`${ind}`}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                            {...provided.droppableProps}
                                        >
                                            {el.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
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
                                                                    display: "flex",
                                                                    justifyContent: "space-around"
                                                                }}
                                                            >
                                                                {item.playerName}
                                                                <Button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        console.log(`playerId=${item.id}, playerName=${item.playerName}`);

                                                                        const newState = [...teams];
                                                                        newState[ind].splice(index, 1);
                                                                        setTeams(
                                                                            newState.filter(group => group.length)
                                                                        );
                                                                    }}
                                                                >
                                                                    remove
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            ))}
                        </DragDropContext>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Teams;
