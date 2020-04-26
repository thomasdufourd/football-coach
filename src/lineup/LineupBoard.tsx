import * as React from 'react';
import PitchSvg from "./PitchSvg";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
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

const LineupBoard: React.FunctionComponent<Props> = (props) => {
    const [locations, setLocations] = React.useState([])

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
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Teams
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Lag #1 (9er)</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Lag #2 (9er)</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Lag #3 (7er)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Lag #1</h4>
                    </Col>
                    <Col>
                        <h4>9-er</h4>
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
                        <h4>Tactical schema</h4>
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
                        <Button variant="dark">
                            Reset substitution
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LineupBoard;