import * as React from "react";
import {Link, useLocation} from "react-router-dom";
import {Card, CardDeck, Container, Row} from "react-bootstrap";
import trophyCupSvg from "./trophy-football-cup.svg";
import medalSvg from "./football-medal-hanging-of-a-ribbon-in-black-shaped.svg";

interface Props {
    group: string;
}

const CompetitionHomePage: React.FunctionComponent<Props> = (props: Props) => {
    const location = useLocation();

    return (
        <Container>
            <Row className="m-5">
                <CardDeck>
                    <Card border="dark" style={{width: '26rem'}}>
                        <Link
                            to={{
                                pathname: "/training",
                                search: location.search,
                            }}
                        >
                            <Card.Img variant="top" src={trophyCupSvg} style={{padding: '4rem'}}/>
                        </Link>
                        <Card.Body>
                            <Card.Title className="text-center">Regular season</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="dark" style={{width: '26rem'}}>
                        <Link
                            to={{
                                pathname: "/teams",
                                search: location.search,
                            }}
                        >
                            <Card.Img variant="top" src={medalSvg} style={{padding: '4rem'}}/>
                        </Link>
                        <Card.Body>
                            <Card.Title className="text-center">Other competitions</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    );
};

export default CompetitionHomePage;
