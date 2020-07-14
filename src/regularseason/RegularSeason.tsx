import * as React from "react";
import {useEffect, useState} from "react";
import {Badge, Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import {
    upcomingFixturesForRegularSeasonG2008_LTG12_1,
    upcomingFixturesForRegularSeasonG2008_LTG12_3
} from "./RegularSeasonMockData";
import {RestTeamslist, Team} from "../api/teamslist";
import {RestStatus} from "../api/api-utils";

interface Props {
    groupId: string;
    restTeamsList: RestTeamslist
}

export interface Fixture {
    date: string;
    time: string;
    home: string;
    away: string;
    location: string;
}


const upcomingFixturesForRegularSeasonG2008 = [
        ...upcomingFixturesForRegularSeasonG2008_LTG12_1,
    ...upcomingFixturesForRegularSeasonG2008_LTG12_3
];

const passedFixturesForRegularSeasonG2008: Fixture[] = [
    {
        date: 'Fr 13.06.2020',
        time: '13.00',
        home: 'Bislett 2008',
        away: 'Lille Tøyen 3',
        location: 'Sophus Bygge'
    }];

const RegularSeason: React.FunctionComponent<Props> = ({groupId, restTeamsList}: Props) => {
    const cardStyle = {
        width: '16rem',
        background: 'lightblue',
        border: '1.25px solid '
    };

    const initTeamslist: Team[] = [];

    // TODO:
    //       #0 fetch teams/fixtures (with IDs)
    //       #1 toggle on/off
    //       #2 filter on toggle
    //       #3 sort the fixtures by date / time (Moment?)

    const [teamslist, setTeamslist] = useState(initTeamslist);

    const [selectedTeamsForTable, setSelectedTeamsForTable] = useState([true, true, true, true]);
    const [indexCheckedBoxSelected, setIndexCheckedBoxSelected] = useState();
    const [isCheckedBoxChanged, setIsCheckedBoxChanged] = useState(false);

    function filterOnTeam(indexCheckedBoxSelected: any) {

    }

    useEffect(() => {
            console.log("Calling useeffect", restTeamsList.status);
            if (restTeamsList.status === RestStatus.Success) {
                setTeamslist(restTeamsList.data);
            }
        },
        [restTeamsList]);

    useEffect(() => {
            const arrayCpy = selectedTeamsForTable.map((value, index) => {
                return index === indexCheckedBoxSelected ? !value : value;
            });
            setSelectedTeamsForTable(arrayCpy);
            filterOnTeam(indexCheckedBoxSelected);
        },
        [indexCheckedBoxSelected, isCheckedBoxChanged]);

    return (
        <Container className="mt-3">
            <Row>
                <h1 className="align-content-center">Regular season 2020</h1>
            </Row>
            <Row className="mt-2">
                <h2>Teams for G2008</h2>
            </Row>
            <Row>

                {teamslist.map((team, idx) => (
                    <Card
                        onClick={ () => {console.log(`Card ${idx} is clicked`)}}
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
                <h2>Upcomming matches</h2>
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
                                setIndexCheckedBoxSelected(idx);
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
                            <th>Match</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {upcomingFixturesForRegularSeasonG2008.map((fixture, idx) => {
                            return (
                                <tr key={idx}
                                    onClick={() => {}}>
                                    <td>{fixture.date} {fixture.time}</td>
                                    <td>{fixture.home} - {fixture.away}</td>
                                    <td>{fixture.location}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row className="mt-2">
                <h2>Passed matches</h2>
            </Row>
            <Row>
                <Col lg="8">
                    <Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Match</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {passedFixturesForRegularSeasonG2008.map((fixture, idx) => {
                            return (
                                <tr key={idx}
                                    onClick={() => {}}>
                                    <td>{fixture.date} {fixture.time}</td>
                                    <td>{fixture.home} - {fixture.away}</td>
                                    <td>{fixture.location}</td>
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
