import * as React from 'react';
import StaticLineupBoard from "../lineup/StaticLineupBoard";
import {__4_3_1, __9er, Lineup, Role} from "../domain/PlayerUtils";
import {Team} from "../api/teamslist";

/*
 TODO: This component will show the lineup for a selected team (blue pitch)
  -> choose tactical schema and starting players
 */

interface Props {
    group: string;
    team: Team;
}


const RegularSeasonLineup: React.FunctionComponent<Props> = ({group, team}) => {

    let lineupModalContent =  (
        <p>You don't have any lineup setup for this team yet.</p>
    );


    const getLineupForTeam = (team: Team):Lineup => {

        return {
            team: {
                group: {
                    name: "G2008",
                    yearOfBirth: 2008, gender: "boy", players: [] // TODO: populate with all players
                },
                name: "Lag #1",
                order: 1,
                players: [],
                tacticalSchemaType: __9er
            },
            schema: __4_3_1,
            starting: [
                {playerName: 'Goal keeper (GK)', role: Role.GOAL_KEEPER},
                {playerName: 'Left back (LB)', role: Role.LEFT_BACK},
                {playerName: 'Center back (CB)', role: Role.CENTRE_BACK_LEFT},
                {playerName: 'Center back (CB)', role: Role.CENTRE_BACK_RIGHT},
                {playerName: 'Right back (RB)', role: Role.RIGHT_BACK},
                {playerName: 'Left Wing (LW)', role: Role.LEFT_WING},
                {playerName: 'Midfield (MF)', role: Role.BOX_TO_BOX_MIDFIELD},
                {playerName: 'Right wing (RW)', role: Role.RIGHT_WING},
                {playerName: 'Striker (ST)', role: Role.STRIKER}
            ],
            substitutes: [
                'Nedim', 'Max', 'Amund SF'
            ]
        };
    };

    return (
        <StaticLineupBoard group={group} lineup={getLineupForTeam(team)}/>
    );
};

export default RegularSeasonLineup;
