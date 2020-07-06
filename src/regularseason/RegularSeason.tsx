import * as React from "react";
import {Badge, Card, Col, Container, Form, Row, Table} from "react-bootstrap";

interface Team {
    name: string;
    teamlead: string;
    coaches: string[];
    type: string;
    tournament: string;
    rank: number;
}

interface Fixture {
    date: string;
    time: string;
    home: string;
    away: string;
    location: string;
}

// Teams at fotball.no
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=7223 G12-1
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=39896 G12-2
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=173306 G12-3 (7-er)
// https://www.fotball.no/fotballdata/lag/hjem/?fiksId=189583 G12-4

const teamsForRegularSeasonG2008: Team[] = [
    {
        name: 'Lille Tøyen G12 1',
        teamlead: 'Pål',
        coaches: ['Pål', 'Patrick'],
        tournament: 'Gutter 12 år 9er 2. div. avd. 05',
        type: '9-er',
        rank: 1
    },
    {
        name: 'Lille Tøyen G12 2',
        teamlead: 'Bente',
        coaches: ['Bente', 'Bendik'],
        tournament: 'Gutter 12 år 9er 3. div. avd. 03',
        type: '9-er',
        rank: 2
    },
    {
        name: 'Lille Tøyen G12 3',
        teamlead: 'Lars',
        coaches: ['Thomas'],
        tournament: 'Gutter 12 år 7er avd. 02',
        type: '7-er',
        rank: 3
    }
];
/*

 */
const upcomingFixturesForRegularSeasonG2008: Fixture[] = [
    {
        date: 'Th 27.08.2020',
        time: '19.10',
        home: 'KFUM 1',
        away: 'Lille Tøyen 1',
        location: 'Ekeberg 21'
    },
    {
        date: 'Mo 31.08.2020',
        time: '19.10',
        home: 'Lille Tøyen 1',
        away: 'Ullern 6',
        location: 'Caltexløkka'
    },
    {
        date: 'Mo 07.09.2020',
        time: '19.10',
        home: 'Lyn Ullevål 1',
        away: 'Lille Tøyen 3',
        location: 'Kringsjå'
    }];

const passedFixturesForRegularSeasonG2008: Fixture[] = [
    {
        date: 'Fr 13.06.2020',
        time: '13.00',
        home: 'Bislett 2008',
        away: 'Lille Tøyen 3',
        location: 'Sophus Bygge'
    }];

const RegularSeason: React.FunctionComponent = () => {
    const cardStyle = {
        width: '16rem',
        background: 'lightblue',
        border: '1.25px solid '
    };

    return (
        <Container className="mt-3">
            <Row>
                <h1 className="align-content-center">Regular season 2020</h1>
            </Row>
            <Row className="mt-2">
                <h2>Teams for G2008</h2>
            </Row>
            <Row>

                {teamsForRegularSeasonG2008.map((team, idx) => (
                    <Card
                        onClick={ () => {console.log(`Card ${idx} is clicked`)}}
                        key={idx}
                        text='dark'
                        style={cardStyle}
                        className="mt-2 mb-2 mr-3"
                    >
                        <Card.Header>
                            Team {team.rank} {'\u00A0'}
                            <Badge variant={team.type === '9-er'? "primary":"secondary"}
                                   onClick={() => {
                                       console.log(`Badge of card ${idx} is clicked`)
                                   }}
                            >
                            {team.type}
                            </Badge>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{team.name} {team.type}</Card.Title>
                            <Card.Text>
                                Team-lead: {team.teamlead}
                            </Card.Text>
                            <Card.Text>
                                Coach: {team.coaches.toString()}
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
                    {teamsForRegularSeasonG2008.map((team, idx) => (
                        <Form.Check
                            inline
                            id={`team-${idx}`}
                            label={`Team ${team.rank}`}
                            checked={true}
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
                <Form className="pl-4">
                    {teamsForRegularSeasonG2008.map((team, idx) => (
                        <Form.Check
                            inline
                            id={`team-${idx}`}
                            label={`Team ${team.rank}`}
                            checked={true}
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
