import * as React from 'react';
import PitchSvg from "./PitchSvg";
import {Button, Col, Container, Row} from "react-bootstrap";
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


const LineupBoard: React.FunctionComponent = () => {

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
                        <h2>Lineup</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>G2008 Lag #1</h4>
                    </Col>
                    <Col>
                        <h4>Seriespill 2020</h4>
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
                                    <div className="scaling-svg-container">
                                        <svg className="scaling-svg" viewBox="0 0 400 60">
                                            <PlayerSvg xposition={50} yposition={20} name={substituteName}></PlayerSvg>
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
                </Row>
            </Container>
        </>
    );
};

export default LineupBoard;