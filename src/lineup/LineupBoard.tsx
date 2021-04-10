import * as React from 'react';
import './LineupBoard.scss';
import PitchSvg from "./PitchSvg";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import {__3_3_2, __4_3_1, emptyLineup, emptyTacticalSchema, emptyTeam, Lineup, Team} from "../domain/PlayerUtils";
import {lineupG2008LagBase, lineupG2008Lag1, lineupG2008Lag2, lineupG2008Lag3} from "../mocking/LineupMockdata"
import {SubstitutionInfoPanel} from "../substitution/SubstitutionInfoPanel";
import {SubstitutionContext} from "../substitution/SubstitutionProvider";
import {emptySubstitution} from "../substitution/SubstitutionUtils";
import {applySchema, emptyPlayerOnFieldListAtStart} from "./LineupUtils";

interface Props {
    group: string;
}



const LineupBoard: React.FunctionComponent<Props> = (props) => {

    const [team, setTeam] = React.useState(emptyTeam);
    const [substitutes, setSubstitutes] = React.useState(emptyLineup.substitutes);
    const [startingPlayersList, setStartingPlayersList] = React.useState(emptyPlayerOnFieldListAtStart);
    const [chosenSchema, setChosenSchema] = React.useState(emptyTacticalSchema);
    const {setSubstitution} = React.useContext(SubstitutionContext);

    const availableLineupsForTheGroup: Lineup[] = [
        lineupG2008Lag1, lineupG2008Lag2
    ];

    // This should be the input ---> App ?
    const listOfAvailableTeams: Team[] = availableLineupsForTheGroup.map( (lineup: Lineup) => {
        return lineup.team
    });

    const getLineup = (team: Team): Lineup => {
        const lineupForTeam = availableLineupsForTheGroup.find(lineup => lineup.team.name === team.name);
        return lineupForTeam? lineupForTeam : emptyLineup;
    };

    return (
        <>
            <Container className="container-fluid">
                <Row className="mt-2">
                    <Col className="small">
                        <h1>Season lineup {props.group}</h1>
                    </Col>
                    <Col>
                        <Dropdown className="float-right">
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
                                            setStartingPlayersList(lineup.starting);
                                            setSubstitutes(lineup.substitutes);
                                            setChosenSchema(lineup.schema);
                                            setSubstitution(emptySubstitution);
                                        }}>
                                            {team.name} {team.tacticalSchemaType.name}
                                        </Dropdown.Item>
                                    )})
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="col-sm-8">
                        <h2>Team {team === emptyTeam? '' : `"${team.name}"`}</h2>
                    </Col>
                    <Col>
                        <h2>{team.tacticalSchemaType.name} {team === emptyTeam? '' : `(${chosenSchema.name})`}</h2>
                    </Col>
                </Row>
                <Row className="mt-1">
                        <Col sm={8}>
                            <div className="scaling-svg-container">
                                <svg className="scaling-svg" viewBox="0 0 1000 585">
                                    <PitchSvg playersOnField={startingPlayersList} schema={chosenSchema}/>
                                </svg>
                            </div>
                        </Col>
                    <Col sm={4}>
                        <SubstitutionInfoPanel
                            startingPlayersList={startingPlayersList}
                            setStartingPlayersList={setStartingPlayersList}
                            substitutes={substitutes}
                            setSubstitutes={setSubstitutes}
                        />
                    </Col>
                </Row>
                <Row className="lineupboard__tactical-schema">
                    <Col>
                        <h3>Tactical schema</h3>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Button className="m-1"
                            variant="dark"
                            disabled={chosenSchema === __4_3_1 || chosenSchema === emptyTacticalSchema}
                            onClick={() => {
                                setStartingPlayersList(applySchema(startingPlayersList, chosenSchema, __4_3_1));
                                setChosenSchema(__4_3_1);
                            }}>
                            {__4_3_1.name}
                        </Button>
                        <Button className="m-1"
                            variant="dark"
                            disabled={chosenSchema === __3_3_2 || chosenSchema === emptyTacticalSchema}
                            onClick={() => {
                                setStartingPlayersList(applySchema(startingPlayersList, chosenSchema, __3_3_2));
                                setChosenSchema(__3_3_2);
                            }}>
                            {__3_3_2.name}
                        </Button>
                    </Col>
                </Row>
            </Container>

            {
                // TODO: create a component
            }
        </>
    );
};

export default LineupBoard;