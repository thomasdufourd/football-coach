import * as React from 'react';
import './LineupBoard.scss';
import {Col, Container, Row} from "react-bootstrap";
import {
    __4_3_1,
    __9er,
    emptyTeam,
    Lineup, Role,
    Team
} from "../domain/PlayerUtils";
import StaticPitchSvg from "./StaticPitchSvg";

interface Props {
    group: string;
}


const StaticLineupBoard: React.FunctionComponent<Props> = (props) => {

    const lineupLilleTøyen1: Lineup = {
        team: {
            group: {
                name: "G2008",
                yearOfBirth: 2008, gender: "boy", players: [] // TODO: populate with all players
            },
            name: "Lag #1",
            order: 1,
            players: [],
            tacticalSchemaType: __9er
        },
        schema: __4_3_1,
        starting: [
            {playerName: 'Goal keeper (GK)', role: Role.GOAL_KEEPER},
            {playerName: 'Left back (LB)', role: Role.LEFT_BACK},
            {playerName: 'Center back (CB)', role: Role.CENTRE_BACK_LEFT},
            {playerName: 'Center back (CB)', role: Role.CENTRE_BACK_RIGHT},
            {playerName: 'Right back (RB)', role: Role.RIGHT_BACK},
            {playerName: 'Left Wing (LW)', role: Role.LEFT_WING},
            {playerName: 'Midfield (MF)', role: Role.BOX_TO_BOX_MIDFIELD},
            {playerName: 'Right wing (RW)', role: Role.RIGHT_WING},
            {playerName: 'Striker (ST)', role: Role.STRIKER}
        ],
        substitutes: [
            'Nedim', 'Max', 'Amund SF'
        ]
    };

    const substitutes = lineupLilleTøyen1.substitutes;
    const startingPlayersList = lineupLilleTøyen1.starting;
    const chosenSchema = lineupLilleTøyen1.schema;
    const team = lineupLilleTøyen1.team;


    return (
        <>
            <Container className="container-fluid">
                <Row className="mt-1">
                    <Col>
                        <h4>{team.tacticalSchemaType.name} {team === emptyTeam? '' : `(${chosenSchema.name})`}</h4>
                    </Col>
                </Row>
                <Row className="mt-1">
                        <Col sm={12}>
                            <div className="scaling-svg-container">
                                <svg className="scaling-svg" viewBox="0 0 1000 585">
                                    <StaticPitchSvg playersOnField={startingPlayersList} schema={chosenSchema}/>
                                </svg>
                            </div>
                        </Col>
                    <Col sm={4}>
                        <div className={substitutes.length === 0 ? "invisible" : "visible"}>
                            <h5 style={{marginTop: 10}}>Substitutes</h5>
                            {substitutes.map( (subsitute, idx) => (
                                <p style={{fontSize: 'small', padding: 0, margin: 0}} key={idx}>{subsitute}</p>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StaticLineupBoard;