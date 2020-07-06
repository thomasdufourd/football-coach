import React, {FunctionComponent, useContext} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {BASE_PATH} from './constants';

import './App.scss';
import Banner from "./navigation/Banner";
import TeamsBoard from "./teams/TeamsBoard";
import LineupBoard from './lineup/LineupBoard';
import {SubstitutionProvider} from "./substitution/SubstitutionProvider";
import About from "./about/About";
import HomePage from "./homepage/HomePage";
import TeamsOverview from "./teams/TeamsOverview";
import TrainingSessionsBoard from "./training/TrainingSessionsBoard";
import WorkInProgressPage from "./WorkInProgressPage";
import CalendarOverview from "./calendar/CalendarOverview";
import Playerslist from "./groupadmin/Playerslist";

import {
    playerslistContext,
    PlayerslistProvider,
} from './api/playerslistContext';
import {RestPlayerslist} from "./api/playerslist";
import {useGroupId} from "./api/orgnr-hook";
import RegularSeason from "./regularseason/RegularSeason";

export const PATH_FRONTPAGE = '/';
export const TEMP_PATH_WORK_IN_PROGRESS = '/wip';
export const PATH_TRAINING = '/training';
export const PATH_TEAMS = '/teams';
export const PATH_LINEUPS = '/lineups';
export const PATH_SPESIFIC_TEAM = '/teams/thisisalongid';
export const PATH_OTHER_COMPETITTIONS = '/othercompetitions';
export const PATH_REGULAR_SEASON = '/regularseason';
export const PATH_CALENDAR = '/calendar';
export const PATH_ABOUT = '/about';
export const PATH_CONTACT = '/contact';


const App: FunctionComponent = () => {
    return (
        <BrowserRouter basename={BASE_PATH}>
            <PlayerslistProvider>
                <AppContent/>
            </PlayerslistProvider>
        </BrowserRouter>
    );
};

const AppContent: FunctionComponent = () => {

    const groupId = useGroupId();
    const restPlayerslist = useContext<RestPlayerslist>(
        playerslistContext
    );

    let innhold = (
        <>
            <p> Your are not authorized to this group</p>
        </>
    );

    if (groupId !== undefined) {

        innhold = (
            <div>
                <Route path={PATH_FRONTPAGE} exact={true}>
                    <HomePage/>
                </Route>
                <Route path={TEMP_PATH_WORK_IN_PROGRESS} exact={true}>
                    <WorkInProgressPage/>
                </Route>
                <Route path={PATH_TRAINING} exact={true}>
                    <TrainingSessionsBoard group="G2008"/>
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
                <Route path={PATH_REGULAR_SEASON} exact={true}>
                    <RegularSeason/>
                </Route>
                <Route path={PATH_OTHER_COMPETITTIONS} exact={true}>
                    <WorkInProgressPage/>
                </Route>

                <Route path={'/players'} exact={true}>
                    <Playerslist groupId={groupId} restPlayersList={restPlayerslist}/>
                </Route>
                <Route path={'/staff'} exact={true}>
                    <WorkInProgressPage/>
                </Route>
                <Route path={PATH_CALENDAR} exact={true}>
                    <CalendarOverview group="G2008"/>
                </Route>
                <Route path={PATH_ABOUT} exact={true}>
                    <About/>
                </Route>
                <Route path={PATH_CONTACT} exact={true}>
                    <WorkInProgressPage/>
                </Route>
            </div>
        );
    }

    return (
        <>
            <Banner
                title="Football Coach"
                isAdmin={false}
            />
            {innhold}
        </>
    );
};

export default App;
