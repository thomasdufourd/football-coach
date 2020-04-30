import * as React from 'react';
import PitchSvg from "./PitchSvg";
import {Button, Col, Container, Dropdown, ListGroup, Row} from "react-bootstrap";
import PlayerSvg from "./PlayerSvg";
import {
    __3_3_2, __3_3_2_til__4_3_1_conversion_table,
    __4_3_1, __4_3_1_til__3_3_2_conversion_table,
    emptyLineup,
    emptyTacticalSchema,
    emptyTeam,
    Lineup,
    Player, PlayerWithRole, Role, TacticalSchema,
    Team
} from "../domain/PlayerUtils";
import {lineupG2008Lag1, lineupG2008Lag2, lineupG2008Lag3} from "../mocking/LineupMockdata"

interface Props {
    group: string;
}


interface Substitution {
    out: Player;
    in: Player;
}

const empyPlayerOnFieldListAtStart: PlayerWithRole[] =  [];

function convertRole(role: Role, schemaOrigin: TacticalSchema, schemaTarget: TacticalSchema): Role {
    switch (schemaOrigin) {
        case __4_3_1:
            if (schemaTarget === __3_3_2) {
                // @ts-ignore
                return __4_3_1_til__3_3_2_conversion_table.has(role) ?
                    __4_3_1_til__3_3_2_conversion_table.get(role)
                    : role;
            } else {
                return role;
            }
        case __3_3_2:
            if (schemaTarget === __4_3_1) {
                // @ts-ignore
                return __3_3_2_til__4_3_1_conversion_table.has(role) ?
                    __3_3_2_til__4_3_1_conversion_table.get(role)
                    : role;
            } else {
                return role;
            }
        default:
            return role;
    }
}

const applySchema = (
    startingPlayersList: PlayerWithRole[],
    schemaOrigin: TacticalSchema,
    schemaTarget: TacticalSchema): PlayerWithRole[]  => {
    console.log(`[DEBUG] ----> applySchema has been called from schema ${schemaOrigin.name} to schema ${schemaTarget.name}`);
    return startingPlayersList.map( (player) => {
        let previousRole = player.role;
        player.role = convertRole(player.role, schemaOrigin, schemaTarget);
        console.log(`[DEBUG] ----> converted player ${player.playerName} 
         with previous role ${previousRole} to role ${player.role}`);
        return player;
    });
};

const LineupBoard: React.FunctionComponent<Props> = (props) => {

    const [team, setTeam] = React.useState(emptyTeam);
    const [chosenLineup, setChosenLineup] = React.useState(emptyLineup); // TODO: dont need that
    const [startingPlayersList, setStartingPlayerList] = React.useState(empyPlayerOnFieldListAtStart);
    const [chosenSchema, setChosenSchema] = React.useState(emptyTacticalSchema);

    const [substitution, setSubstitution] = React.useState();


    const availableLineupsForTheGroup: Lineup[] = [
        lineupG2008Lag1, lineupG2008Lag2, lineupG2008Lag3
    ];

    const listOfAvailableTeams: Team[] = availableLineupsForTheGroup.map( (lineup: Lineup) => {
        return lineup.team
    });

    const getLineup = (team: Team): Lineup => {
        const lineupForTeam = availableLineupsForTheGroup.find(lineup => lineup.team.name === team.name);
        return lineupForTeam? lineupForTeam : emptyLineup;
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Season lineup {props.group}</h1>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Teams
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    listOfAvailableTeams.map((team) => {
                                    return(
                                        <Dropdown.Item key={team.order} onSelect={ () => {
                                            setTeam(team);
                                            const lineup = getLineup(team);
                                            setChosenLineup(lineup);
                                            setStartingPlayerList(lineup.starting);
                                            setChosenSchema(lineup.schema);
                                        }
                                        }>
                                            {team.name} {team.tacticalSchemaType.name}
                                        </Dropdown.Item>
                                    )})
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Team {team.name} </h2>
                    </Col>
                    <Col>
                        <h2>{team.tacticalSchemaType.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <div className="scaling-svg-container">
                            <svg className="scaling-svg" viewBox="0 0 1000 585">
                                <PitchSvg playersOnField={startingPlayersList} schema={chosenSchema}/>
                            </svg>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <h5>Substitutes</h5>
                        {
                            chosenLineup.substitutes.map((substituteName) => {
                                return (
                                    <div className="scaling-svg-container" key={substituteName}>
                                            <svg className="scaling-svg" viewBox="0 0 400 60">
                                                <PlayerSvg
                                                    xposition={50}
                                                    yposition={20}
                                                    name={substituteName}>
                                                </PlayerSvg>
                                            </svg>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Tactical schema</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            variant="dark"
                            disabled={chosenSchema === __4_3_1 || chosenSchema === emptyTacticalSchema}
                            onClick={() => {
                                setStartingPlayerList(applySchema(startingPlayersList, chosenSchema, __4_3_1));
                                setChosenSchema(__4_3_1);
                            }}>
                            {__4_3_1.name}
                        </Button>
                        <Button
                            variant="dark"
                            disabled={chosenSchema === __3_3_2 || chosenSchema === emptyTacticalSchema}
                            onClick={() => {
                                setStartingPlayerList(applySchema(startingPlayersList, chosenSchema, __3_3_2));
                                setChosenSchema(__3_3_2);
                            }}>
                            {__3_3_2.name}
                        </Button>
                    </Col>
                    {/*
                    <Col>
                        <Button variant="dark" disabled={true} >
                            Reset substitution
                        </Button>
                    </Col>
                    */}
                </Row>
            </Container>

            {
                // TODO: create a component
            }
            <Container>
                <Row>
                    <Col>
                        <h2>Lineups for {team.name} {team.tacticalSchemaType.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item disabled={true} action onClick={ () => {console.log("Clicked on list item #1")}}>
                            Match start (default)
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={ () => {console.log("Clicked on list item #2")}}>
                            2nd Half
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={ () => {console.log("Clicked on list item #3")}}>
                            Should we try 3-3-2 (WIP)
                        </ListGroup.Item>
                    </ListGroup>,
                </Row>
                <Row>
                    <Col>
                        <Button variant="dark">
                            New lineup
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LineupBoard;