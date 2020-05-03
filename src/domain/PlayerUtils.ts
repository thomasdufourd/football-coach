// https://www.football-lineups.com/tactic/4-3-1-2/

/*
GK - Goalkeeper
DF - Defenders:
  RB - Right-back
  SW - Sweeper
  CB - Centre-back
  LB - Left-back
MF - Midfielders:
  RM - Right-midfield
  LM - Left-midfield
  CM - Central Midfielders
  DM - Defensive midfielder
  BX - Box-to-Box CM
  AM - Attacking midfielder
FW - Forwards:
  RW - Right-wing
  ST - Striker
  LW - Left-wing
*/

import {SVGCoordinates} from "../lineup/LineupUtils";

export interface PositionOnField {
    name: string;
    positionLine: PositionLine;
    positionAxis: PositionColumn;
}


export enum PositionColumn {
    LEFT , // Col 1
    CENTER_LEFT, // Col 2
    CENTER, // Col 3
    CENTER_RIGHT, // Col 4
    RIGHT // Col 5
}

export enum PositionLine {
    KEEPER, // 1.1
    CENTER_BACK, // 1.4
    DEFENDER, //2
    DEFENSIVE_MIDFIELD, // 3
    OFFENSIVE_MIDFIELD, // 4
    FORWARD// 5
}

/* TODO

    Auto-generate the '9 starting' lineup:
     players are defined with several 'PositionLine' and 'PositionColumn' they can fit and the one they prefer.
     Then the system will find their roles

   Tactical schema change:
    some players might change Role (box-to-box midfield --> defensiv midfield)
 */

export enum Role {
    GOAL_KEEPER,
    CENTRE_BACK_LEFT,
    CENTRE_BACK_RIGHT,
    LEFT_BACK,
    SWEEPER,
    DEFENSIVE_MIDFIELD,
    RIGHT_BACK,
    LEFT_MIDFIELD,
    BOX_TO_BOX_MIDFIELD,
    RIGHT_MIDFIELD,
    OFFENSIVE_MIDFIELD,
    LEFT_WING,
    STRIKER,
    RIGHT_WING
}



const position9er: Map<Role, SVGCoordinates>  = new Map([
    [Role.GOAL_KEEPER, {xposition: 500, yposition:430}],
    [Role.CENTRE_BACK_LEFT, {xposition: 300, yposition:390}],
    [Role.CENTRE_BACK_RIGHT, {xposition: 700, yposition:390}],
    [Role.LEFT_BACK, {xposition: 280, yposition:280}],
    [Role.SWEEPER, {xposition: 500, yposition:380}],
    [Role.DEFENSIVE_MIDFIELD, {xposition: 500, yposition:340}],
    [Role.RIGHT_BACK, {xposition: 720, yposition:280}],
    [Role.LEFT_MIDFIELD, {xposition: 360, yposition:240}],
    [Role.BOX_TO_BOX_MIDFIELD, {xposition: 500, yposition:260}],
    [Role.RIGHT_MIDFIELD, {xposition: 640, yposition:240}],
    [Role.OFFENSIVE_MIDFIELD, {xposition: 500, yposition:180}],
    [Role.LEFT_WING, {xposition: 350, yposition:150}],
    [Role.STRIKER, {xposition: 500, yposition:120}],
    [Role.RIGHT_WING, {xposition: 650, yposition:150}]
]);

export const __4_3_1_til__3_3_2_conversion_table: Map<Role, Role>  = new Map([
    [Role.BOX_TO_BOX_MIDFIELD, Role.DEFENSIVE_MIDFIELD],
    [Role.RIGHT_BACK, Role.RIGHT_MIDFIELD],
    [Role.LEFT_BACK, Role.LEFT_MIDFIELD],
    [Role.STRIKER, Role.OFFENSIVE_MIDFIELD]
]);

export const __3_3_2_til__4_3_1_conversion_table: Map<Role, Role>  = new Map([
    [Role.DEFENSIVE_MIDFIELD, Role.BOX_TO_BOX_MIDFIELD],
    [Role.RIGHT_MIDFIELD, Role.RIGHT_BACK],
    [Role.LEFT_MIDFIELD, Role.LEFT_BACK],
    [Role.OFFENSIVE_MIDFIELD, Role.STRIKER]
]);


export const getCoordinatesFromRole = (role:Role) :SVGCoordinates => {
    // @ts-ignore
    return position9er.has(role) ? position9er.get(role) : {xposition:0, yposition:0};
};

export interface TacticalSchema {
    name: string,
    type: TacticalSchemaType,
    role: Role[]
}

export interface TacticalSchemaType {
    name: TacticalSchemaTypeName,
    nbOfPlayers: number
}

export enum TacticalSchemaTypeName {
    NO_TACTICAL_SCHEMA_TYPE_NAME = ' ',
    _3er = '3er',
    _5er = '5er',
    _7er = '7er',
    _9er = '9er',
    _11er = '11er'
}

export const NO_TACTICAL_SCHEMA: TacticalSchemaType = {
    name: TacticalSchemaTypeName.NO_TACTICAL_SCHEMA_TYPE_NAME, nbOfPlayers: 0
};

export const __7er: TacticalSchemaType = {
    name: TacticalSchemaTypeName._7er, nbOfPlayers: 7
};

export const __9er: TacticalSchemaType = {
    name: TacticalSchemaTypeName._9er, nbOfPlayers: 7
};

export const empty_tactical_schema: TacticalSchema = {
    name: ' ',
    type: {name: TacticalSchemaTypeName.NO_TACTICAL_SCHEMA_TYPE_NAME, nbOfPlayers: 0},
    role: []
};

export const __2_3_1: TacticalSchema = {
    name: '2_3_1',
    type: {name: TacticalSchemaTypeName._7er, nbOfPlayers: 7},
    role: [
        Role.GOAL_KEEPER,
        Role.CENTRE_BACK_LEFT, Role.CENTRE_BACK_RIGHT,
        Role.LEFT_MIDFIELD, Role.BOX_TO_BOX_MIDFIELD, Role.RIGHT_MIDFIELD,
        Role.STRIKER
    ]
};

export const __4_3_1: TacticalSchema = {
    name: '4_3_1',
    type: {name: TacticalSchemaTypeName._9er, nbOfPlayers: 9},
    role: [
        Role.GOAL_KEEPER,
        Role.LEFT_BACK, Role.CENTRE_BACK_LEFT, Role.CENTRE_BACK_RIGHT, Role.RIGHT_BACK,
        Role.LEFT_WING, Role.BOX_TO_BOX_MIDFIELD, Role.RIGHT_WING,
        Role.STRIKER
    ]
};

export const __3_3_2: TacticalSchema = {
    name: '3_3_2',
    type: {name: TacticalSchemaTypeName._9er, nbOfPlayers: 9},
    role: [
        Role.GOAL_KEEPER,
        Role.LEFT_BACK, Role.CENTRE_BACK_LEFT, Role.CENTRE_BACK_RIGHT, Role.RIGHT_BACK,
        Role.DEFENSIVE_MIDFIELD,
        Role.LEFT_MIDFIELD, Role.OFFENSIVE_MIDFIELD, Role.RIGHT_MIDFIELD
    ]
};

export interface Lineup {
    team: Team,
    schema: TacticalSchema,
    starting: PlayerWithRole[]
    substitutes: string[]
}

export interface PlayerWithRole {
    playerName: string;
    role: Role;
}

export interface Player {
    name: string;
    group: Group;
    positions: PositionOnField[];
}

export type Gender = 'girl' | 'boy' | undefined;


export interface Group {
    name: string,
    yearOfBirth: number,
    gender: Gender,
    players: Player[]
}

export interface Team {
    order: number;
    name: string;
    tacticalSchemaType: TacticalSchemaType;
    players: Player[];
    group: Group;
}

export const emptyTeam: Team = {
    order: 0, name: ' ', group: {name: 'nogroup', yearOfBirth:1900, players:[], gender: undefined}, players: [], tacticalSchemaType: NO_TACTICAL_SCHEMA
};

export const emptyLineup: Lineup = {
    team: emptyTeam,
    schema: __4_3_1,
    starting: [],
    substitutes: []
};

export const emptyTacticalSchemaType: TacticalSchemaType = {
    name: TacticalSchemaTypeName.NO_TACTICAL_SCHEMA_TYPE_NAME,
    nbOfPlayers: 0
};

export const emptyTacticalSchema: TacticalSchema = {
    name: 'notacticalschema',
    type: emptyTacticalSchemaType,
    role: []
};
