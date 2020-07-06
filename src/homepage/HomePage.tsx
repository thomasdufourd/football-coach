import * as React from "react";
import {Container} from "react-bootstrap";
import PitchSvg from "../lineup/PitchSvg";
import {__4_3_1} from "../domain/PlayerUtils";

const About: React.FunctionComponent = () => {
    return (
        <Container className="mt-3">
                    <div className="scaling-svg-container">
                        <svg className="scaling-svg" viewBox="0 0 1000 585">
                            <PitchSvg playersOnField={[]} schema={__4_3_1}/>
                        </svg>
                    </div>

        </Container>
    );
};

export default About;
