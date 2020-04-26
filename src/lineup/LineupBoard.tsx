import * as React from 'react';
import PitchSvg from "./PitchSvg";
import {Button, Col, Container, Dropdown, ListGroup, Row} from "react-bootstrap";
import PlayerSvg from "./PlayerSvg";
import { emptyLineup, emptyTeam, Lineup, Team} from "../domain/PlayerUtils";
import {lineupG2008Lag1, lineupG2008Lag2, lineupG2008Lag3} from "../mocking/LineupMockdata"

interface Props {
    group: string;
}

interface TeamDropdown {
    nb: number;
    name: string;
    type: string;
}

const teamDropdown: TeamDropdown[] = [
    {nb: 1, name: 'Lag #1', type: '9-er'},
    {nb: 2, name: 'Lag #2', type: '9-er'},
    {nb: 3, name: 'Lag #3', type: '7-er'},
];


const LineupBoard: React.FunctionComponent<Props> = (props) => {

    const [team, setTeam] = React.useState(emptyTeam);
    const [chosenLineup, setChosenLineup] = React.useState(emptyLineup);


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
                                            setChosenLineup(getLineup(team));
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
                        <h2>Team: {team.name} {team.tacticalSchemaType.name}</h2>
                    </Col>
                    <Col>
                        <h2>{team.tacticalSchemaType.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <div className="scaling-svg-container">
                            <svg className="scaling-svg" viewBox="0 0 1000 585">
                                <PitchSvg lineup={chosenLineup}/>
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
                        <Button variant="dark">
                            2-3-3
                        </Button>
                        <Button variant="dark">
                            3-3-2
                        </Button>
                        <Button variant="dark">
                            4-3-1
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="dark" disabled={true} >
                            Reset substitution
                        </Button>
                    </Col>
                </Row>
            </Container>

            {
                // TODO: create a component
            }
            <Container>
                <Row>
                    <Col>
                        <h2>Available lineups for {team.name} {team.tacticalSchemaType.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item disabled={true} action onClick={ () => {console.log("Clicked on list item #1")}}>
                            Match start
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