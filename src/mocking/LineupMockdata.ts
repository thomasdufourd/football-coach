import {
    __2_3_1, __3_3_2,
    __4_3_1, __7er, __9er, Lineup, Role,
} from "../domain/PlayerUtils";

// Lineups G2008
export const lineupG2008Lag1: Lineup = {
    team: {
        group: {
            name: "G2008",
            year: 2008
        },
        name: "Lag #1",
        order: 1,
        players: [],
        tacticalSchemaType: __9er
    },
    schema: __4_3_1,
    starting: [
        {playerName: 'Tobias', role: Role.GOAL_KEEPER},
        {playerName: 'Sivert', role: Role.LEFT_BACK},
        {playerName: 'Juster', role: Role.CENTRE_BACK_LEFT},
        {playerName: 'Storm', role: Role.CENTRE_BACK_RIGHT},
        {playerName: 'August B', role: Role.RIGHT_BACK},
        {playerName: 'Lukas', role: Role.LEFT_WING},
        {playerName: 'Theo', role: Role.BOX_TO_BOX_MIDFIELD},
        {playerName: 'Dominic', role: Role.RIGHT_WING},
        {playerName: 'Patricio', role: Role.STRIKER}
    ],
    substitutes: [
        'Nedim', 'Max', 'Amund SF'
    ]
};

export const lineupG2008Lag2: Lineup = {
    team: {
        group: {
            name: "G2008",
            year: 2008
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
            year: 2008
        },
        name: "Lag #3",
        order: 3,
        players: [],
        tacticalSchemaType: __7er
    },
    schema: __2_3_1,
    starting: [
        {playerName: 'Mats', role: Role.GOAL_KEEPER},
        {playerName: 'Max', role: Role.CENTRE_BACK_LEFT},
        {playerName: 'Behez', role: Role.CENTRE_BACK_RIGHT},
        {playerName: 'Joel', role: Role.LEFT_MIDFIELD},
        {playerName: 'Tobias', role: Role.BOX_TO_BOX_MIDFIELD},
        {playerName: 'Ali', role: Role.RIGHT_MIDFIELD},
        {playerName: 'Sufyan', role: Role.STRIKER}
    ],
    substitutes: [
        'Gabriel', 'Ludvik'
    ]
};
