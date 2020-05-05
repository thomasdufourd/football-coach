import React, {FunctionComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {BASE_PATH} from './server/constants';

import './App.scss';
import Banner from "./navigation/Banner";
import Teams from "./teams/Teams";
import LineupBoard from './lineup/LineupBoard';
import {Col, Container, Row} from "react-bootstrap";
import PitchSvg from "./lineup/PitchSvg";
import { empty_tactical_schema } from "./domain/PlayerUtils";
import {SubstitutionProvider} from "./substitution/SubstitutionProvider";

export const PATH_FRONTPAGE = '/assistantcoach';
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

    let innhold = (
        <>
            <Route path={PATH_FRONTPAGE} exact={true}>
                <Container>
                    <Row className="mt-2">
                        <h1>Football</h1>
                    </Row>
                    <Row className="mt-2">
                        <Col sm={8}>
                            <div className="scaling-svg-container">
                                <svg className="scaling-svg" viewBox="0 0 1000 585">
                                    <PitchSvg playersOnField={[]} schema={empty_tactical_schema}/>
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
                <SubstitutionProvider>
                <LineupBoard group="G2008"/>
                    </SubstitutionProvider>
            </Route>

        </>
    );


    return (
        <>
            <Banner
                title="Assistant Coach"
            />
            {innhold}
        </>
    );
};

export default App;
