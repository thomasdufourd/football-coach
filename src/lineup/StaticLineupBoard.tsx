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
    lineup: Lineup;
}


const StaticLineupBoard: React.FunctionComponent<Props> = ({group, lineup}) => {

    const substitutes = lineup.substitutes;
    const startingPlayersList = lineup.starting;
    const chosenSchema = lineup.schema;
    const team = lineup.team;


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