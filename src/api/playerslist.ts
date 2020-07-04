import { RestResource } from './api-utils';

export enum PositionOnPitch {
    GOAL_KEEPER = 'GK',
    DEFENDER = 'DF',
    CENTER_BACK = 'CB',
    SWEEPER = 'SW',
    RIGHT_BACK = 'RB',
    LEFT_BACK = 'LB',
    MIDFIELD = 'MF',
    FORWARD = 'FW',
    RIGHT_WING = 'RW',
    LEFT_WING = 'LW',
    STRIKER = 'ST',
}
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

export interface Player {
    id: string,
    name: string;
    position: string;
    started: string;
}

export type RestPlayerslist = RestResource<Player[]>;
