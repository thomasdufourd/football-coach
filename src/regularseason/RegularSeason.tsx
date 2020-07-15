import * as React from "react";
import {useEffect, useState} from "react";
import {Badge, Button, Card, Col, Container, Form, Modal, Row, Table} from "react-bootstrap";
import {RestTeamslist, Team} from "../api/teamslist";
import {RestStatus} from "../api/api-utils";
import {Fixture, RestFixtureslist} from "../api/fixtureslist";
import {dayOfWeekMonthYearDate, timeOfDate} from "../calendar/DateUtils";
import RegularSeasonLineup from "./RegularSeasonLineup";
import {teamslistContext} from "../api/teamslistContext";

interface Props {
    groupId: string;
    restTeamsList: RestTeamslist,
    restFixturesList: RestFixtureslist
}


const passedFixturesForRegularSeasonG2008: Fixture[] = [
    {
        date: '2020-08-27T17:10:00.000Z',
        location: '', surface: '',
        home: 'Bislett 2008',
        away: 'Lille Tøyen 3',
        arena: 'Sophus Bygge'
    }];

const RegularSeason: React.FunctionComponent<Props> = ({groupId, restTeamsList, restFixturesList}: Props) => {
    const cardStyle = {
        width: '16rem',
        background: 'lightblue',
        border: '1.25px solid '
    };

    const initTeamslist: Team[] = [];
    const initFixtureslist: Fixture[] = [];

    const [teamslist, setTeamslist] = useState(initTeamslist);
    const [fixtureslist, setFixtureslist] = useState(initFixtureslist);

    const [selectedTeamsForTable, setSelectedTeamsForTable] = useState([true, true, true, true]);
    const [isCheckedBoxChanged, setIsCheckedBoxChanged] = useState(false);


    const sortOnDate =  (fixtures: Fixture[]):Fixture[] => {
        return fixtures.sort((a, b) =>
            (a.date > b.date) ? 1 : (a.date === b.date) ? ((a.location > b.location) ? 1 : -1) : -1
        );
    };

    const applySelection =  (selectedTeams: boolean[], fixtures: Fixture[]):Fixture[] => {
        const lt1IsSelected = selectedTeams[0];
        const lt2IsSelected = selectedTeams[1];
        const lt3IsSelected = selectedTeams[2];
        const lt4IsSelected = selectedTeams[3];

        console.log(`LT1? ${lt1IsSelected}, LT2? ${lt2IsSelected}, LT3? ${lt3IsSelected}, LT4? ${lt4IsSelected}`);

        let selectedTeamsName: string[] = [];
        if (lt1IsSelected) {
            selectedTeamsName.push('Lille Tøyen 1');
        }
        if (lt2IsSelected) {
            selectedTeamsName.push('Lille Tøyen 2');
        }
        if (lt3IsSelected) {
            selectedTeamsName.push('Lille Tøyen 3');
        }
        if (lt4IsSelected) {
            selectedTeamsName.push('Lille Tøyen 4');
        }

        return fixtures.filter( (fixture: Fixture)  =>
            (selectedTeamsName.includes(fixture.away) || selectedTeamsName.includes(fixture.home))
        );
    };

    useEffect(() => {
        console.log("Reload fixtureslist");
        console.log("selectedTeamsForTable (from useEffect): ", selectedTeamsForTable);

            if (restFixturesList.status === RestStatus.Success) {
                setFixtureslist(applySelection(selectedTeamsForTable, sortOnDate(restFixturesList.data)));
            }
        },
        [restFixturesList, isCheckedBoxChanged, selectedTeamsForTable]);

    useEffect(() => {
            if (restTeamsList.status === RestStatus.Success) {
                setTeamslist(restTeamsList.data);
            }
        },
        [restTeamsList]);

    const [showRegularSeasonLineupModal, setShowRegularSeasonLineupModal] = useState(false);
    const handleCloseRegularSeasonLineupModal = () => setShowRegularSeasonLineupModal(false);

    const isOneOfOurTeams = (teamName: string): boolean => {
        let isFound = false;
        teamslist.forEach( team => {
            if (team.name === teamName) {
                isFound = true;
            }
        });
        return isFound;
    };

    let lineupModalContent =  (
        <p>You don't have any lineup setup for this team yet.</p>
    );

    if (true) {
        lineupModalContent = (
            <RegularSeasonLineup group="G2008"/>
        );
    }
    return (
        <Container className="mt-3">
            <Modal size="lg"
                   aria-labelledby="example-modal-sizes-title-lg"
                   show={showRegularSeasonLineupModal}
                   onHide={handleCloseRegularSeasonLineupModal}
                   >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Current lineup for Lille Tøyen 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {lineupModalContent}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setShowRegularSeasonLineupModal(false);
                    }}>
                        Discard
                    </Button>
                    <Button href="/lineups" variant="primary" onClick={() => {
                        setShowRegularSeasonLineupModal(false);
                    }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <h1 className="align-content-center">Regular season 2020</h1>
            </Row>
            <Row>
                <Col>
                    <p>Setup teams compositions for the regular season</p>
                </Col>
                <Col>
                    <Button className="m-1"
                            type="button"
                            href="/teams"
                    >
                        Setup
                    </Button>
                </Col>
            </Row>

            <Row className="mt-2">
                <h2>Teams for G2008</h2>
            </Row>
            <Row>

                {teamslist.map((team, idx) => (
                    <Card
                        onClick={ () => {
                            console.log(`Card ${idx} is clicked`);
                            setShowRegularSeasonLineupModal(true);
                        }}
                        key={idx}
                        text='dark'
                        style={cardStyle}
                        className="mt-2 mb-2 mr-3"
                    >
                        <Card.Header>
                            {team.name} {'\u00A0'}
                            <Badge variant={team.type === '9er'? "primary":"secondary"}
                                   onClick={() => {
                                       console.log(`Badge of card ${idx} is clicked`)
                                   }}
                            >
                            {team.type}
                            </Badge>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{team.coach}</Card.Title>
                            <Card.Text>
                                Team-lead: {team.teamlead}
                            </Card.Text>
                            <Card.Text>
                                {team.tournament}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
                }
            </Row>

            <Row className="mt-2">
                <h2>Upcoming fixtures</h2>
            </Row>
            <Row>
                <Form className="pl-4">
                    {teamslist.map((team, idx) => (
                        <Form.Check
                            key={idx}
                            inline
                            id={`team-${idx}`}
                            label={`${team.name}`}
                            checked={selectedTeamsForTable[idx]}
                            onChange={() => {
                                setSelectedTeamsForTable(selectedTeamsForTable.map((value, index) => {
                                    return index === idx ? !value : value;
                                }));
                                setIsCheckedBoxChanged(!isCheckedBoxChanged);
                            }}
                        />
                    ))}
                </Form>            </Row>
            <Row>
                <Col lg="8">
                    <Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Home</th>
                            <th>Away</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {fixtureslist.map((fixture, idx) => {
                            return (
                                <tr key={idx}
                                    onClick={() => {}}>
                                    <td>{dayOfWeekMonthYearDate(new Date(fixture.date))}</td>
                                    <td>{timeOfDate(new Date(fixture.date))}</td>
                                    <td style={{color: isOneOfOurTeams(fixture.home)? 'blue': 'black'}}>{fixture.home}</td>
                                    <td style={{color: isOneOfOurTeams(fixture.away)? 'blue': 'black'}}>{fixture.away}</td>
                                    <td>{fixture.arena}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row className="mt-2">
                <h2>Passed fixtures</h2>
            </Row>
            <Row>
                <Col lg="8">
                    <Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Match</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {passedFixturesForRegularSeasonG2008.map((fixture, idx) => {
                            return (
                                <tr key={idx}
                                    onClick={() => {}}>
                                    <td>{dayOfWeekMonthYearDate(new Date(fixture.date))}</td>
                                    <td>{timeOfDate(new Date(fixture.date))}</td>
                                    <td>{fixture.home} - {fixture.away}</td>
                                    <td>{fixture.arena}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Container>
    );
};

export default RegularSeason;
