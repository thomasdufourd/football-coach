import {
    __2_3_1, __3_3_2,
    __4_3_1, __7er, __9er,
    CENTRAL_MIDFIELD,
    CENTRE_BACK_LEFT,
    CENTRE_BACK_RIGHT, DEFENSIVE_MIDFIELD,
    GOAL_KEEPER, LEFT_BACK, LEFT_MIDFIELD,
    Lineup, RIGHT_BACK, RIGHT_MIDFIELD, STRIKER
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
        {playerName: 'Tobias', position: GOAL_KEEPER},
        {playerName: 'Sivert', position: LEFT_BACK},
        {playerName: 'Juster', position: CENTRE_BACK_LEFT},
        {playerName: 'Storm', position: CENTRE_BACK_RIGHT},
        {playerName: 'August B', position: RIGHT_BACK},
        {playerName: 'Lukas', position: LEFT_MIDFIELD},
        {playerName: 'Theo', position: CENTRAL_MIDFIELD},
        {playerName: 'Dominic', position: RIGHT_MIDFIELD},
        {playerName: 'Patricio', position: STRIKER}
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
        {playerName: 'Mats', position: GOAL_KEEPER},
        {playerName: 'Amund SA', position: LEFT_BACK},
        {playerName: 'Max', position: CENTRE_BACK_LEFT},
        {playerName: 'Martin', position: CENTRE_BACK_RIGHT},
        {playerName: 'Mahdi', position: RIGHT_BACK},
        {playerName: 'Fredrik', position: LEFT_MIDFIELD},
        {playerName: 'Aleks', position: DEFENSIVE_MIDFIELD},
        {playerName: 'Aleksa', position: CENTRAL_MIDFIELD},
        {playerName: 'Joel', position: RIGHT_MIDFIELD}
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
        {playerName: 'Mats', position: GOAL_KEEPER},
        {playerName: 'Max', position: CENTRE_BACK_LEFT},
        {playerName: 'Behez', position: CENTRE_BACK_RIGHT},
        {playerName: 'Joel', position: LEFT_MIDFIELD},
        {playerName: 'Tobias', position: CENTRAL_MIDFIELD},
        {playerName: 'Ali', position: RIGHT_MIDFIELD},
        {playerName: 'Sufyan', position: STRIKER}
    ],
    substitutes: [
        'Gabriel', 'Ludvik'
    ]
};
