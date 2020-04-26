import * as React from 'react';
import PitchSvg from "./PitchSvg";
import {Button, Col, Container, Dropdown, ListGroup, Row} from "react-bootstrap";
import PlayerSvg from "./PlayerSvg";
import {
    __4_3_1, CENTRAL_MIDFIELD,
    CENTRE_BACK_LEFT,
    CENTRE_BACK_RIGHT,
    GOAL_KEEPER,
    LEFT_BACK, LEFT_MIDFIELD,
    Lineup,
    RIGHT_BACK, RIGHT_MIDFIELD, STRIKER
} from "../domain/PlayerUtils";

interface Props {
    group: string;
}

interface TeamDropdown {
    nb: number;
    name: string;
    type: string;
}

const teamDropdown: TeamDropdown[] = [
    {nb: 0, name: 'Lag #1', type: '9-er'},
    {nb: 1, name: 'Lag #2', type: '9-er'},
    {nb: 2, name: 'Lag #3', type: '7-er'},
];

const LineupBoard: React.FunctionComponent<Props> = (props) => {

    /*
    const [chosenChoiceNumber, setChosenChoiceNumber] = React.useState([]);

    const handleChoiceOfTeamChange = (teamNb) => {
        setChosenChoiceNumber(teamNb)
    };*/

    const lineupG2008Lag1: Lineup = {
        schema: __4_3_1,
        starting: [
            {playerName: 'Tobias', position: GOAL_KEEPER},
            {playerName: 'Juster', position: CENTRE_BACK_LEFT},
            {playerName: 'Storm', position: CENTRE_BACK_RIGHT},
            {playerName: 'Theo', position: CENTRAL_MIDFIELD},
            {playerName: 'August B', position: RIGHT_BACK},
            {playerName: 'Sivert', position: LEFT_BACK},
            {playerName: 'Lukas', position: LEFT_MIDFIELD},
            {playerName: 'Dominic', position: RIGHT_MIDFIELD},
            {playerName: 'Aleks', position: STRIKER}
        ],
        substitutes: [
            'Mats', 'Max', 'Amund SF'
        ]
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Season lineup {props.group}</h1>
                    </Col>
                    <Col>
                        <Dropdown onSelect={(e: string) => console.log("selected "+e)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Teams
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    teamDropdown.map((item) => {
                                    return(
                                        <Dropdown.Item onSelect={() => console.log("selected itemNumber "+ item.nb)}>
                                            {item.name} {item.type}
                                        </Dropdown.Item>
                                    )})
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Lag #1</h2>
                    </Col>
                    <Col>
                        <h2>9-er</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <div className="scaling-svg-container">
                            <svg className="scaling-svg" viewBox="0 0 1000 585">
                                <PitchSvg lineup={lineupG2008Lag1}/>
                            </svg>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <h5>Substitutes</h5>
                        {
                            lineupG2008Lag1.substitutes.map((substituteName) => {
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

            <Container>
                <Row>
                    <Col>
                        <h2>Available lineups for Lag#1</h2>
                    </Col>
                </Row>
                <Row>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action onClick={ () => {console.log("Clicked on list item #1")}}>
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