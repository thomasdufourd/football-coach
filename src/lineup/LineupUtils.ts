import {Lineup, PlayerOnField, PositionOnField, TacticalSchema, TacticalSchemaTypeName} from "../domain/PlayerUtils";

export interface SvgDrawyablePlayer {
    name: string;
    coordinates: Coordinates
}

interface Coordinates {
    xposition: number;
    yposition: number;
}

/*
    {name: 'Goalkeeper', positionLine: PositionLine.KEEPER, positionAxis: PositionAxis.CENTER};
    {name: 'Centre-back (left)', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.CENTER_LEFT};
    {name: 'Centre-back (right)', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.CENTER_RIGHT};
    {name: 'Left back', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.LEFT};
    {name: 'Right back', positionLine: PositionLine.DEFENDER, positionAxis: PositionAxis.RIGHT};
    {name: 'Left-midfield', positionLine: PositionLine.MIDFIELDER, positionAxis: PositionAxis.CENTER_LEFT};
    {name: 'Central Midfield', positionLine: PositionLine.MIDFIELDER, positionAxis: PositionAxis.CENTER};
    {name: 'Right-midfield', positionLine: PositionLine.MIDFIELDER, positionAxis: PositionAxis.CENTER_RIGHT};
    {name: 'Striker', positionLine: PositionLine.FORWARD, positionAxis: PositionAxis.CENTER};
    {name: 'Right-wing', positionLine: PositionLine.FORWARD, positionAxis: PositionAxis.CENTER_RIGHT};
    {name: 'Left-wing', positionLine: PositionLine.FORWARD, positionAxis: PositionAxis.CENTER_LEFT};

        {
            position: "Venstre midt-stopper",
            name: "Juster",
            x: 300,
            y: 390
        },
        {
            position: "Høyre midt-stopper",
            name: "Storm",
            x: 700,
            y: 390
        },
        {
            position: "Midtbane",
            name: "Theo",
            x: 500,
            y: 300
        },
        {
            position: "Høyre vingback",
            name: "August B",
            x: 720,
            y: 250
        },
        {
            position: "Venstre vingback",
            name: "Sivert",
            x: 280,
            y: 250
        },
        {
            position: "Høyre indreløper",
            name: "Dominic",
            x: 640,
            y: 150
        },
        {
            position: "Venstre indreløper",
            name: "Lukas",
            x: 360,
            y: 150
        },
        {
            position: "Spiss",
            name: "Aleks",
            x: 500,
            y: 120
        }
    ];
 */


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

function getPosition(position: PositionOnField, schema: TacticalSchema): Coordinates {
    switch (schema.name) {
        case '4_3_1': {
            return getPositionFor4_3_1(position)
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
