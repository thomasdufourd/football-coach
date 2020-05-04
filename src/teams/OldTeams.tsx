import * as React from 'react';
import {Breadcrumb, Button, Col, Container, Row} from "react-bootstrap";

interface Props {
    group: string;
}

const OldTeams: React.FunctionComponent<Props> = (props) => {
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="../">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Teams</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col>
                    <h1>Season 2020</h1>
                    <h2>{props.group}</h2>
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
export default OldTeams;