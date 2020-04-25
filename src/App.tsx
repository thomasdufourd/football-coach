import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BASE_PATH } from './server/constants';

import './App.scss';
import Banner from "./components/Banner";
import Teams from "./components/Teams";
import LineupBoard from './lineup/LineupBoard';

export const PATH_FRONTPAGE = '/';
export const PATH_LINEUPS = '/lineups';
export const PATH_TEAMS = '/teams';


const App: FunctionComponent = () => {
    return (
        <BrowserRouter basename={BASE_PATH}>
            <AppContent />
        </BrowserRouter>
    );
};

const AppContent: FunctionComponent = () => {
        let innhold = (
            <>
                <Route path={PATH_FRONTPAGE} exact={true}>
                    <p>Welcome!</p>
                </Route>
                <Route path={PATH_TEAMS} exact={true}>
                    <Teams group="G2008"/>
                </Route>
                <Route path={PATH_LINEUPS} exact={true}>
                    <LineupBoard/>
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
