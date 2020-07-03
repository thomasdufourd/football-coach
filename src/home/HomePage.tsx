import * as React from "react";
import {Card, CardDeck, Container, Row} from "react-bootstrap";
import footballplayerSvg from "./football-player-kicking-ball.svg";
import footballFieldSvg from "./football-list-and-field-outline.svg";
import trophySvg from "./football-trophy-cup.svg";
import {Link, useLocation} from "react-router-dom";

const HomePage: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <Container>
            <Row className="m-5">
                <CardDeck>
                    <Card border="dark" style={{width: '17rem'}}>
                        <Link
                            to={{
                                pathname: "/training",
                                search: location.search,
                            }}
                        >
                            <Card.Img variant="top" src={footballplayerSvg} style={{padding: '1rem'}}/>
                        </Link>
                        <Card.Body>
                            <Card.Title>Training</Card.Title>
                            <Card.Text>
                                Plan your next training sessions from various exercises and practice games for all
                                levels and ages.
                                On training day adapt get help to adjust your plans according to attendance.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Go to {' '}
                                <Link
                                    to={{
                                        pathname: "/training",
                                        search: location.search,
                                    }}
                                >
                                    training
                                </Link>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card border="dark" style={{width: '17rem'}}>
                        <Link
                            to={{
                                pathname: "/competitions",
                                search: location.search,
                            }}
                        >
                            <Card.Img variant="top" src={trophySvg} style={{padding: '1rem'}}/>
                        </Link>
                        <Card.Body>

                            <Card.Title>Competition</Card.Title>
                            <Card.Text>
                                Keep sight of your group's upcoming matches. Manage your teams and lineups for the regular championship and cups.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                Go to {' '}
                                <Link
                                    to={{
                                        pathname: "/competitions",
                                        search: location.search,
                                    }}
                                >
                                    competition
                                </Link>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card border="dark" style={{width: '17rem'}}>
                        <Link
                            to={{
                                pathname: "/teams",
                                search: location.search,
                            }}
                        >
                            <Card.Img variant="top" src={footballFieldSvg} style={{padding: '1rem'}}/>
                        </Link>
                        <Card.Body>
                            <Card.Title>Teams and lineups</Card.Title>
                            <Card.Text>
                                Set up your teams compositions and elaborate lineups before match start for upcoming
                                training match or competition
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Go to {' '}
                                <Link
                                    to={{
                                        pathname: "/teams",
                                        search: location.search,
                                    }}
                                >
                                    teams
                                </Link>
                                {' '}and{' '}
                                <Link
                                    to={{
                                        pathname: "/lineups",
                                        search: location.search,
                                    }}
                                >
                                    lineups
                                </Link>
                            </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    );
};

export default HomePage;
