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

export interface PositionOnField {
    name: string;
    positionLine: PositionLine;
    positionAxis: PositionAxis;
}

export enum PositionAxis {
    LEFT = 'LEFT',
    CENTER_LEFT = 'CENTER_LEFT',
    CENTER = 'CENTER',
    CENTER_RIGHT = 'CENTER_RIGHT',
    RIGHT = 'RIGHT'
}

export enum PositionLine {
    KEEPER = 'Goalkeeper',
    DEFENDER = 'Defender',
    MIDFIELDER = 'Midfielder',
    FORWARD = 'Forward'
}

export const GOAL_KEEPER:PositionOnField =
    {name: 'Goalkeeper', positionLine: PositionLine.KEEPER, positionAxis: PositionAxis.CENTER};
export const CENTRE_BACK_LEFT:PositionOnField =
    {name: 'Centre-back (left)', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.CENTER_LEFT};
export const CENTRE_BACK_RIGHT:PositionOnField =
    {name: 'Centre-back (right)', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.CENTER_RIGHT};
export const LEFT_BACK:PositionOnField =
    {name: 'Left back', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.LEFT};
export const RIGHT_BACK:PositionOnField =
    {name: 'Right back', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.RIGHT};
export const LEFT_MIDFIELD:PositionOnField =
    {name: 'Left-midfield', positionLine: PositionLine.MIDFIELDER, positionAxis: PositionAxis.CENTER_LEFT};
export const CENTRAL_MIDFIELD:PositionOnField =
    {name: 'Central Midfield', positionLine: PositionLine.MIDFIELDER, positionAxis: PositionAxis.CENTER};
export const RIGHT_MIDFIELD:PositionOnField =
    {name: 'Right-midfield', positionLine: PositionLine.MIDFIELDER, positionAxis: PositionAxis.CENTER_RIGHT};
export const STRIKER:PositionOnField =
    {name: 'Striker', positionLine: PositionLine.FORWARD, positionAxis: PositionAxis.CENTER};
export const RIGHT_WING:PositionOnField =
    {name: 'Right-wing', positionLine: PositionLine.FORWARD, positionAxis: PositionAxis.CENTER_RIGHT};
export const LEFT_WING:PositionOnField =
    {name: 'Left-wing', positionLine: PositionLine.FORWARD, positionAxis: PositionAxis.CENTER_LEFT};



export interface TacticalSchema {
    name: string,
    type: TacticalSchemaType,
    positionsOnField: PositionOnField[]
}

export interface TacticalSchemaType {
    name: TacticalSchemaTypeName,
    nbOfPlayers: number
}

export enum TacticalSchemaTypeName {
    _3er = '3er',
    _5er = '5er',
    _7er = '7er',
    _9er = '9er',
    _11er = '11er'
}

export const __4_3_1: TacticalSchema = {
    name: '4_3_1',
    type: {name: TacticalSchemaTypeName._9er, nbOfPlayers: 9},
    positionsOnField: [
        GOAL_KEEPER,
        LEFT_BACK, CENTRE_BACK_LEFT, CENTRE_BACK_RIGHT, RIGHT_BACK,
        LEFT_MIDFIELD, CENTRAL_MIDFIELD, RIGHT_BACK,
        STRIKER
    ]
};

export const __4_2_2: TacticalSchema = {
    name: '4_2_2',
    type: {name: TacticalSchemaTypeName._9er, nbOfPlayers: 9},
    positionsOnField: [
        GOAL_KEEPER,
        LEFT_BACK, CENTRE_BACK_LEFT, CENTRE_BACK_RIGHT, RIGHT_BACK,
        LEFT_MIDFIELD, RIGHT_BACK,
        LEFT_WING, RIGHT_WING
    ]
};

export interface Lineup {
    schema: TacticalSchema,
    starting: PlayerOnField[]
    substitutes: string[]
}

export interface PlayerOnField {
    playerName: string;
    position: PositionOnField;
}

export interface Player {
    name: string;
    group: Group;
    positions: PositionOnField[];
}

export interface Group {
    name: string;
    year: Number;
}



