import * as React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

interface Props {
    group: string;
}

const Teams: React.FunctionComponent<Props> = (props) => {
    return (
        <Container>

            <Row>
                <Col>
                    <h1>Teams {props.group}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Lag #1</h4>
                    <p>9-er</p>
                </Col>
                <Col>
                    <h4>Lag #2</h4>
                    <p>9-er</p>
                </Col>
                <Col>
                    <h4>Lag #3</h4>
                    <p>7-er</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="dark">
                        Save
                    </Button>
                </Col>
                <Col>
                    <Button variant="dark">
                        Save
                    </Button>
                </Col>
                <Col>
                    <Button variant="dark">
                        Save
                    </Button>
                </Col>
            </Row>

        </Container>
    );

};
// <h1>Teams for {props.group}</h1>
export default Teams;