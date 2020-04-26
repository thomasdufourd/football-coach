import {Lineup, PositionOnField, TacticalSchema} from "../domain/PlayerUtils";

export interface SvgDrawyablePlayer {
    name: string;
    coordinates: Coordinates
}

interface Coordinates {
    xposition: number;
    yposition: number;
}

function getPositionFor2_3_1(position: PositionOnField): Coordinates {
    return getPositionFor4_3_1(position);
}

function getPositionFor4_3_1(position: PositionOnField): Coordinates {
    switch (position.name) {
        case 'Goalkeeper': {
            return {xposition: 500, yposition: 430};
        }
        case 'Centre-back (left)': {
            return {xposition: 300, yposition: 390};
        }
        case 'Centre-back (right)': {
            return {xposition: 700, yposition: 390};
        }
        case 'Left back': {
            return {xposition: 280, yposition: 250};
        }
        case 'Right back': {
            return {xposition: 720, yposition: 250};
        }
        case 'Left-midfield': {
            return {xposition: 360, yposition: 150};
        }
        case 'Central Midfield': {
            return {xposition: 500, yposition: 300};
        }
        case 'Right-midfield': {
            return {xposition: 640, yposition: 150};
        }
        case 'Striker': {
            return {xposition: 500, yposition: 120};
        }

        default: return {xposition: 0, yposition: 0}
    }
}

function getPositionFor3_3_2(position: PositionOnField): Coordinates {
    switch (position.name) {
        case 'Goalkeeper': {
            return {xposition: 500, yposition: 430};
        }
        case 'Centre-back (left)': {
            return {xposition: 300, yposition: 390};
        }
        case 'Centre-back (right)': {
            return {xposition: 700, yposition: 390};
        }
        case 'Left back': {
            return {xposition: 280, yposition: 250};
        }
        case 'Right back': {
            return {xposition: 720, yposition: 250};
        }
        case 'Left-midfield': {
            return {xposition: 400, yposition: 150};
        }
        case 'Defensive Midfield': {
            return {xposition: 500, yposition: 320};
        }
        case 'Central Midfield': {
            return {xposition: 500, yposition: 225};
        }
        case 'Right-midfield': {
            return {xposition: 600, yposition: 150};
        }
        case 'Striker': {
            return {xposition: 500, yposition: 120};
        }

        default: return {xposition: 0, yposition: 0}
    }
}

function getPosition(position: PositionOnField, schema: TacticalSchema): Coordinates {
    switch (schema.name) {
        case '4_3_1': {
            return getPositionFor4_3_1(position)
        }
        case '3_3_2': {
            return getPositionFor3_3_2(position)
        }
        case '2_3_1': {
            return getPositionFor2_3_1(position)
        }
        default: return {xposition: 0, yposition: 0}
    }
}

export const mapToSvgPlayers = (lineup: Lineup): SvgDrawyablePlayer[] => {
    return lineup.starting.map((playerOnField) => {
        return {
            name: playerOnField.playerName,
            coordinates: getPosition(playerOnField.position, lineup.schema)
        }
    });
};
