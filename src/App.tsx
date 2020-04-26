import React, {FunctionComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {BASE_PATH} from './server/constants';

import './App.scss';
import Banner from "./navigation/Banner";
import Teams from "./teams/Teams";
import LineupBoard from './lineup/LineupBoard';
import {Col, Container, Row} from "react-bootstrap";
import PitchSvg from "./lineup/PitchSvg";
import {
    __4_3_1,
    CENTRAL_MIDFIELD,
    CENTRE_BACK_LEFT,
    CENTRE_BACK_RIGHT,
    GOAL_KEEPER, LEFT_BACK, LEFT_MIDFIELD,
    Lineup, RIGHT_BACK, RIGHT_MIDFIELD, STRIKER
} from "./domain/PlayerUtils";

export const PATH_FRONTPAGE = '/';
export const PATH_LINEUPS = '/lineups';
export const PATH_TEAMS = '/teams';


const App: FunctionComponent = () => {
    return (
        <BrowserRouter basename={BASE_PATH}>
            <AppContent/>
        </BrowserRouter>
    );
};

const AppContent: FunctionComponent = () => {
    const emptyLineup: Lineup = {
        schema: __4_3_1,
        starting: [],
        substitutes: []
    };
    let innhold = (
        <>
            <Route path={PATH_FRONTPAGE} exact={true}>
                <Container>
                    <Row>
                        <h4> </h4>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <div className="scaling-svg-container">
                                <svg className="scaling-svg" viewBox="0 0 1000 585">
                                    <PitchSvg lineup={emptyLineup}/>
                                </svg>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Route>
            <Route path={PATH_TEAMS} exact={true}>
                <Teams group="G2008"/>
            </Route>
            <Route path={PATH_LINEUPS} exact={true}>
                <LineupBoard group="G2008"/>
            </Route>

        </>
    );


    return (
        <>
            <Banner
                title="Football Coach app"
            />
            {innhold}
        </>
    );
};

export default App;
