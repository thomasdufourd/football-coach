import {
    __2_3_1, __3_3_2,
    __4_3_1, __7er, __9er, Lineup, Role,
} from "../domain/PlayerUtils";

// Lineups G2008
export const lineupG2008LagBase: Lineup = {
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

export const lineupG2008Lag1: Lineup = {
    team: {
        group: {
            name: "G2008",
            yearOfBirth: 2008, gender: "boy", players: [] // TODO: populate with all players
        },
        name: "Lag 2. divisjon",
        order: 1,
        players: [],
        tacticalSchemaType: __9er
    },
    schema: __4_3_1,
    starting: [
        {playerName: 'Theo', role: Role.GOAL_KEEPER},
        {playerName: 'Sivert', role: Role.LEFT_BACK},
        {playerName: 'Juster', role: Role.CENTRE_BACK_LEFT},
        {playerName: 'Behez', role: Role.CENTRE_BACK_RIGHT},
        {playerName: 'August B', role: Role.RIGHT_BACK},
        {playerName: 'Dominic', role: Role.LEFT_WING},
        {playerName: 'Nedim', role: Role.BOX_TO_BOX_MIDFIELD},
        {playerName: 'Ivo', role: Role.RIGHT_WING},
        {playerName: 'Storm', role: Role.STRIKER}
    ],
    substitutes: [
        'Mats', 'Illiass', 'Ludvik', 'Daniel'
    ]
};

export const lineupG2008Lag2: Lineup = {
    team: {
        group: {
            name: "G2008",
            yearOfBirth: 2008, gender: "boy", players: [] // TODO: populate with all players
        },
        name: "Lag 3. divisjon",
        order: 2,
        players: [],
        tacticalSchemaType: __9er
    },
    schema: __3_3_2,
    starting: [
        {playerName: 'August DN', role: Role.GOAL_KEEPER},
        {playerName: 'Tobias', role: Role.LEFT_WING},
        {playerName: 'Amund SF', role: Role.CENTRE_BACK_LEFT},
        {playerName: 'Martin', role: Role.CENTRE_BACK_RIGHT},
        {playerName: 'Max', role: Role.RIGHT_WING},
        {playerName: 'Amund SA', role: Role.DEFENSIVE_MIDFIELD},
        {playerName: 'Joel', role: Role.LEFT_MIDFIELD},
        {playerName: 'Patricio', role: Role.OFFENSIVE_MIDFIELD},
        {playerName: 'Jonathan', role: Role.RIGHT_MIDFIELD}
    ],
    substitutes: [
        'Vikram', 'Fredrik M', 'Fredrik', 'Sufyan', 'Senad'
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
