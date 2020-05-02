import {getCoordinatesFromRole, PlayerWithRole, TacticalSchema} from "../domain/PlayerUtils";

export interface SvgDrawyablePlayer {
    name: string;
    coordinates: SVGCoordinates
}

export interface SVGCoordinates {
    xposition: number;
    yposition: number;
}


export const mapToSvgPlayers = (playersWithRole: PlayerWithRole[], schema: TacticalSchema): SvgDrawyablePlayer[] => {
    return playersWithRole.map((playerOnField) => {
        return {
            name: playerOnField.playerName,
            coordinates: getCoordinatesFromRole(playerOnField.role)
        }
    });
};
