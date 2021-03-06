import * as React from "react";
import {Alert, Container, Fade} from "react-bootstrap";


const WorkInProgressPage: React.FunctionComponent = () => {
    return (
        <Container>
            <Alert variant="info" transition={Fade}>
                <Alert.Heading>Work in progress</Alert.Heading>
                <p>
                    This page is not build yet
                </p>
            </Alert>
            <h1 className="m-2">TODO</h1>

        </Container>
    )
};

export default WorkInProgressPage;
