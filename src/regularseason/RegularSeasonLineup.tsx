import * as React from 'react';
import {Container, Row} from "react-bootstrap";
import LineupBoard from "../lineup/LineupBoard";
import StaticLineupBoard from "../lineup/StaticLineupBoard";

/*
 TODO: This component will show the lineup for a selected team (blue pitch)
  -> choose tactical schema and starting players
 */



interface Props {
    group: string;
}




const RegularSeasonLineup: React.FunctionComponent<Props> = (props) => {

    return (
        <StaticLineupBoard group="G2008"/>
    );
};

export default RegularSeasonLineup;
