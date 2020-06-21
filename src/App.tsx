import React, {FunctionComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {BASE_PATH} from './server/constants';

import './App.scss';
import Banner from "./navigation/Banner";
import TeamsBoard from "./teams/TeamsBoard";
import LineupBoard from './lineup/LineupBoard';
import {Col, Container, Row} from "react-bootstrap";
import PitchSvg from "./lineup/PitchSvg";
import { empty_tactical_schema } from "./domain/PlayerUtils";
import {SubstitutionProvider} from "./substitution/SubstitutionProvider";
import HomePage from "./home/HomePage";
import TeamsOverview from "./teams/TeamsOverview";
import CompetitionHomePage from "./competition/CompetitionHomePage";

export const PATH_FRONTPAGE = '/home';
export const PATH_LINEUPS = '/lineups';
export const PATH_TEAMS = '/teams';
export const PATH_SPESIFIC_TEAM = '/teams/thisisalongid';
export const PATH_COMPETITTION = '/competitions';


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
                <HomePage/>
            </Route>
            <Route path={PATH_TEAMS} exact={true}>
                <TeamsOverview group="G2008"/>
            </Route>
            <Route path={PATH_SPESIFIC_TEAM} exact={true}>
                <TeamsBoard group="G2008"/>
            </Route>
            <Route path={PATH_LINEUPS} exact={true}>
                <SubstitutionProvider>
                <LineupBoard group="G2008"/>
                    </SubstitutionProvider>
            </Route>
            <Route path={PATH_COMPETITTION} exact={true}>
                <CompetitionHomePage group="G2008"/>
            </Route>

        </>
    );


    return (
        <>
            <Banner
                title="Assistant Coach"
                isAdmin={false}
            />
            {innhold}
        </>
    );
};

export default App;
