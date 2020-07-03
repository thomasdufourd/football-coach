import {
    __2_3_1, __3_3_2,
    __4_3_1, __7er, __9er, Lineup, Role,
} from "../domain/PlayerUtils";

// Lineups G2008
export const lineupG2008Lag1: Lineup = {
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

export const lineupG2008Lag2: Lineup = {
    team: {
        group: {
            name: "G2008",
            yearOfBirth: 2008, gender: "boy", players: [] // TODO: populate with all players
        },
        name: "Lag #2",
        order: 2,
        players: [],
        tacticalSchemaType: __9er
    },
    schema: __3_3_2,
    starting: [
        {playerName: 'Mats', role: Role.GOAL_KEEPER},
        {playerName: 'Amund SA', role: Role.LEFT_WING},
        {playerName: 'Max', role: Role.CENTRE_BACK_LEFT},
        {playerName: 'Martin', role: Role.CENTRE_BACK_RIGHT},
        {playerName: 'Mahdi', role: Role.RIGHT_WING},
        {playerName: 'Aleksa', role: Role.DEFENSIVE_MIDFIELD},
        {playerName: 'Fredrik', role: Role.LEFT_MIDFIELD},
        {playerName: 'Aleks', role: Role.OFFENSIVE_MIDFIELD},
        {playerName: 'Joel', role: Role.RIGHT_MIDFIELD}
    ],
    substitutes: [
        'Daniel', 'Jonathan', 'August DN'
    ]
};

export const lineupG2008Lag3: Lineup = {
    team: {
        group: {
            name: "G2008",
            yearOfBirth: 2008, gender: "boy", players: [] // TODO: populate with all players
        },
        name: "Lag #3",
        order: 3,
        players: [],
        tacticalSchemaType: __7er
    },
    schema: __2_3_1,
    starting: [
        {playerName: 'Goal keeper (GK)', role: Role.GOAL_KEEPER},
        {playerName: 'Center back (CB)', role: Role.CENTRE_BACK_LEFT},
        {playerName: 'Center back (CB)', role: Role.CENTRE_BACK_RIGHT},
        {playerName: 'Left Wing (LW)', role: Role.LEFT_MIDFIELD},
        {playerName: 'Midfield (MF)', role: Role.BOX_TO_BOX_MIDFIELD},
        {playerName: 'Right wing (RW)', role: Role.RIGHT_MIDFIELD},
        {playerName: 'Striker (ST)', role: Role.STRIKER}
    ],
    substitutes: [
        'Gabriel', 'Ludvik'
    ]
};
