import * as React from "react";
import {Alert, Container, Fade, Image} from "react-bootstrap";
import trainingExample from './training-sessions-prototype.png';

interface Props {
    group: string;
}

const TrainingSessionsBoard: React.FunctionComponent<Props> = (props) => {
    return (
        <Container>
            <Alert variant="info" transition={Fade}>
                <Alert.Heading>Work in progress</Alert.Heading>
                <p>
                    This page is a prototype for illustrate the functionality of the 'Training' page.
                </p>
            </Alert>
            <h1 className="m-2">Training sessions board</h1>
            <p className="m-2">Set up your training session here</p>

            <Image src={trainingExample} fluid/>

        </Container>
    )
};

export default TrainingSessionsBoard;
